const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.resolve(__dirname, './data.json');

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { users: [], inquiries: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function init() {
  const data = readData();
  if (!data.users) data.users = [];
  if (!data.inquiries) data.inquiries = [];
  // ensure there is an admin user with the required password
  const bcrypt = require('bcryptjs');
  const desiredPw = 'UK_Developers@2026';
  const existing = data.users.find(u => u.username === 'admin');
  if (!existing) {
    const hash = bcrypt.hashSync(desiredPw, 10);
    data.users.push({ id: uuidv4(), username: 'admin', password: hash });
    console.log('Default admin user created with username=admin password=' + desiredPw);
  } else {
    // if password does not match the desired one, reset it automatically
    if (!bcrypt.compareSync(desiredPw, existing.password)) {
      existing.password = bcrypt.hashSync(desiredPw, 10);
      console.log('Admin password reset to', desiredPw);
    }
  }
  writeData(data);
}

function countUsers() {
  const data = readData();
  return data.users.length;
}

function getUser(username) {
  const data = readData();
  return data.users.find(u => u.username === username) || null;
}

function addUser(username, passwordHash) {
  const data = readData();
  const id = uuidv4();
  data.users.push({ id, username, password: passwordHash });
  writeData(data);
  return id;
}

function setAdminPassword(hash) {
  const data = readData();
  const user = data.users.find(u => u.username === 'admin');
  if (user) {
    user.password = hash;
  } else {
    data.users.push({ id: uuidv4(), username: 'admin', password: hash });
  }
  writeData(data);
}

function insertInquiry({ name, email, phone, projectId, message, source }) {
  const data = readData();
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  data.inquiries.unshift({ id, name, email, phone, projectId: projectId || '', message: message || '', source: source || 'form', status: 'new', createdAt });
  writeData(data);
  return id;
}

function getAllInquiries() {
  const data = readData();
  // remove inquiries older than one week before returning them
  const now = Date.now();
  const cutoff = now - 7 * 24 * 60 * 60 * 1000;
  const originalLength = data.inquiries.length;
  data.inquiries = data.inquiries.filter(i => {
    const created = new Date(i.createdAt).getTime();
    return created >= cutoff;
  });
  if (data.inquiries.length !== originalLength) {
    writeData(data);
  }
  return data.inquiries;
}

function updateInquiry(id, updates) {
  const data = readData();
  const idx = data.inquiries.findIndex(i => i.id === id);
  if (idx === -1) throw new Error('Inquiry not found');
  const item = data.inquiries[idx];
  const merged = Object.assign({}, item, updates, { id: item.id });
  data.inquiries[idx] = merged;
  writeData(data);
  return merged;
}

function deleteInquiry(id) {
  const data = readData();
  const idx = data.inquiries.findIndex(i => i.id === id);
  if (idx === -1) throw new Error('Inquiry not found');
  data.inquiries.splice(idx, 1);
  writeData(data);
  return true;
}

init();

module.exports = {
  init,
  countUsers,
  getUser,
  addUser,
  setAdminPassword,
  insertInquiry,
  getAllInquiries,
  updateInquiry,
  deleteInquiry,
};