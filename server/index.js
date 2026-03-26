require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express();
// enable CORS and allow Authorization header for PUT/DELETE from frontend
app.use(cors({
  origin: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// restrict API access to localhost only when explicitly requested (set LOCAL_ONLY=true)
app.use((req, res, next) => {
  if (process.env.LOCAL_ONLY === 'true') {
    const ip = req.ip || (req.connection && req.connection.remoteAddress);
    // support IPv4-mapped IPv6
    if (ip && ip !== '127.0.0.1' && ip !== '::1' && ip !== '::ffff:127.0.0.1') {
      return res.status(403).json({ error: 'Forbidden' });
    }
  }
  next();
});

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// public route
app.post('/api/inquiries', (req, res) => {
  const { name, email, phone, projectId, message, source } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'name, email and phone are required' });
  }
  try {
    const id = db.insertInquiry({ name, email, phone, projectId, message, source });
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// auth
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  try {
    const user = db.getUser(username);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = bcrypt.compareSync(password, user.password);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '8h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// middleware
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Missing token' });
  const [type, token] = header.split(' ');
  if (type !== 'Bearer' || !token) return res.status(401).json({ error: 'Malformed token' });
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.warn('JWT verify failed', err && err.message);
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = decoded;
    // attach user info for logging
    console.log('Authenticated user:', decoded && decoded.username);
    next();
  });
}

// protected inquiries list
// protected inquiries list (optional source filter)
app.get('/api/inquiries', authMiddleware, (req, res) => {
  try {
    const source = req.query.source; // 'whatsapp' or 'form' or undefined
    let rows = db.getAllInquiries();
    if (source) {
      rows = rows.filter(r => r.source === source);
    }
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update an inquiry (edit fields or status)
app.put('/api/inquiries/:id', authMiddleware, (req, res) => {
  const id = req.params.id;
  const updates = req.body || {};
  try {
    // only allow specific fields to be updated
    const allowed = ['name', 'email', 'phone', 'message', 'status', 'projectId'];
    const filtered = {};
    Object.keys(updates).forEach(k => {
      if (allowed.includes(k)) filtered[k] = updates[k];
    });
    // validate status if provided
    if (filtered.status) {
      const allowedStatus = ['new', 'contacted', 'in-progress', 'closed'];
      if (!allowedStatus.includes(filtered.status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }
    }
    console.log('Updating inquiry', id, 'with', filtered);
    const updated = db.updateInquiry(id, filtered);
    res.json(updated);
  } catch (err) {
    if (err && err.message === 'Inquiry not found') return res.status(404).json({ error: err.message });
    res.status(500).json({ error: err.message });
  }
});

// delete an inquiry
app.delete('/api/inquiries/:id', authMiddleware, (req, res) => {
  const id = req.params.id;
  try {
    console.log('Deleting inquiry', id, 'by user', req.user && req.user.username);
    db.deleteInquiry(id);
    res.status(204).end();
  } catch (err) {
    if (err && err.message === 'Inquiry not found') return res.status(404).json({ error: err.message });
    res.status(500).json({ error: err.message });
  }
});

// export
app.get('/api/export', (req, res) => {
  // allow token via query for direct download links from frontend
  const tokenFromQuery = req.query.token;
  const authHeader = req.headers.authorization;
  const token = tokenFromQuery || (authHeader ? authHeader.split(' ')[1] : null);
  if (!token) return res.status(401).json({ error: 'Missing token' });
  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    const format = req.query.format === 'json' ? 'json' : 'csv';
    try {
      const rows = db.getAllInquiries();
      if (format === 'json') {
        res.setHeader('Content-Disposition', 'attachment; filename=inquiries.json');
        res.json(rows);
      } else {
        // simple CSV
        let csv = 'id,name,email,phone,projectId,source,message,createdAt\n';
        rows.forEach(r => {
          csv += `${r.id},"${r.name}","${r.email}","${r.phone}","${r.projectId}","${r.source}","${r.message}","${r.createdAt}"\n`;
        });
        res.setHeader('Content-Disposition', 'attachment; filename=inquiries.csv');
        res.type('text/csv').send(csv);
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
});

// serve frontend when build exists (static files + SPA fallback)
const frontendDist = path.join(__dirname, '../dist');
if (require('fs').existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API route not found' });
    }
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

// start
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});