import React from 'react';
import { API_BASE } from '../../constants';

const Admin: React.FC = () => {
  const [token, setToken] = React.useState<string | null>(null);
  const [loginError, setLoginError] = React.useState<string | null>(null);
  // username is fixed to admin and not shown; only password is required
  const [username] = React.useState('admin');
  const [password, setPassword] = React.useState('');
  const [inquiries, setInquiries] = React.useState<any[]>([]);
  const [whatsapps, setWhatsapps] = React.useState<any[]>([]);
  const [activeTab, setActiveTab] = React.useState<'inquiries' | 'whatsapp'>('inquiries');
  const [editing, setEditing] = React.useState<any | null>(null);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const text = await res.text();
        let message = `Login failed (${res.status})`;
        try {
          const body = JSON.parse(text);
          if (body && body.error) message = body.error;
        } catch (_err) {
          if (text.trim()) message = text.trim().slice(0, 300);
        }
        setLoginError(message);
        return;
      }

      const data = await res.json();
      setToken(data.token);
      // do not persist token so password must be entered again on reload
    } catch (err) {
      console.error(err);
      setLoginError('Unable to reach the API. Start the backend server and make sure the frontend is using the correct API base URL.');
    }
  };

  const loadInquiries = async () => {
    if (!token) return;
    const res = await fetch(`${API_BASE}/inquiries`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setInquiries(data.filter((i:any)=>i.source!=='whatsapp'));
    setWhatsapps(data.filter((i:any)=>i.source==='whatsapp'));
  };

  const saveEdit = async (id: string, updates: any) => {
    if (!token) return;
    const res = await fetch(`${API_BASE}/inquiries/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(updates),
    });
    if (res.ok) {
      setEditing(null);
      await loadInquiries();
    } else {
      const err = await res.json();
      alert(err.error || 'Update failed');
    }
  };

  const exportData = (format: 'csv' | 'json') => {
    if (!token) return;
    // include token in query so browser download works without Authorization header
    window.location.href = `${API_BASE}/export?format=${format}&token=${token}`;
  };

  // no persistence: always require login on load

  React.useEffect(() => {
    if (token) {
      loadInquiries();
    }
  }, [token]);

  // if not logged in show password form only
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <form onSubmit={login} className="w-full max-w-sm bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full border p-2 rounded"
            />
          </div>
          {loginError && (
            <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {loginError}
            </div>
          )}
          <button type="submit" className="w-full bg-black text-white py-2 rounded">Log In</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-full pt-16 md:pt-20 lg:pt-24 xl:pt-28"> 
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Admin Dashboard</h1>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <button onClick={() => exportData('csv')} className="px-4 py-2 bg-gray-200">Export CSV</button>
          <button onClick={() => exportData('json')} className="px-4 py-2 bg-gray-200">Export JSON</button>
          <button onClick={() => { setToken(null); setPassword(''); }} className="px-4 py-2 bg-red-200">Logout</button>
        </div>
      </div>

      <div className="mb-4">
        <button onClick={() => setActiveTab('inquiries')} className={`mr-2 px-4 py-2 ${activeTab==='inquiries'?'bg-black text-white':'bg-gray-100'}`}>Form Inquiries</button>
        <button onClick={() => setActiveTab('whatsapp')} className={`${activeTab==='whatsapp'?'bg-black text-white':'bg-gray-100'} px-4 py-2`}>WhatsApp Queries</button>
      </div>

      {activeTab === 'inquiries' && (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr>
              <th className="border p-1 sm:p-2">Name</th>
              <th className="border p-1 sm:p-2">Email</th>
              <th className="border p-1 sm:p-2">Phone</th>
              <th className="border p-1 sm:p-2">Project</th>
              <th className="border p-1 sm:p-2">Message</th>
              <th className="border p-1 sm:p-2">Status</th>
              <th className="border p-1 sm:p-2">Date</th>
              <th className="border p-1 sm:p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(i => (
              <tr key={i.id} className="align-top">
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[120px]">{i.name}</td>
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[160px]">{i.email}</td>
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[120px]">{i.phone}</td>
                <td className="border p-1 sm:p-2">{i.projectId}</td>
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[200px]">{i.message}</td>
                <td className="border p-1 sm:p-2">{i.status || 'new'}</td>
                <td className="border p-1 sm:p-2">{new Date(i.createdAt).toLocaleString()}</td>
                <td className="border p-1 sm:p-2">
                  <button className="mr-2 px-2 py-1 bg-blue-100" onClick={() => setEditing(i)}>Edit</button>
                  <button className="px-2 py-1 bg-red-100" onClick={async () => {
                    if (!confirm('Delete this inquiry?')) return;
                    if (!token) { alert('Not authenticated'); return; }
                    const res = await fetch(`${API_BASE}/inquiries/${i.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
                    if (res.ok || res.status===204) await loadInquiries(); else { const e = await res.json(); alert(e.error||'Delete failed'); }
                  }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      {activeTab === 'whatsapp' && (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr>
              <th className="border p-1 sm:p-2">Name</th>
              <th className="border p-1 sm:p-2">Email</th>
              <th className="border p-1 sm:p-2">Phone</th>
              <th className="border p-1 sm:p-2">Message</th>
              <th className="border p-1 sm:p-2">Status</th>
              <th className="border p-1 sm:p-2">Date</th>
              <th className="border p-1 sm:p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {whatsapps.map(i => (
              <tr key={i.id} className="align-top">
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[120px]">{i.name}</td>
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[160px]">{i.email}</td>
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[120px]">{i.phone}</td>
                <td className="border p-1 sm:p-2 whitespace-normal break-words max-w-[200px]">{i.message}</td>
                <td className="border p-1 sm:p-2">{i.status || 'new'}</td>
                <td className="border p-1 sm:p-2">{new Date(i.createdAt).toLocaleString()}</td>
                <td className="border p-1 sm:p-2">
                  <button className="mr-2 px-2 py-1 bg-blue-100" onClick={() => setEditing(i)}>Edit</button>
                  <button className="px-2 py-1 bg-red-100" onClick={async () => {
                    if (!confirm('Delete this whatsapp inquiry?')) return;
                    if (!token) { alert('Not authenticated'); return; }
                    const res = await fetch(`${API_BASE}/inquiries/${i.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
                    if (res.ok || res.status===204) await loadInquiries(); else { const e = await res.json(); alert(e.error||'Delete failed'); }
                  }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
          <div className="bg-white p-6 w-full max-w-md rounded z-50">
            <h2 className="text-lg font-bold mb-4">Edit Inquiry</h2>
            <div className="space-y-2">
              <div>
                <label className="block">Name</label>
                <input value={editing.name} onChange={(e)=>setEditing({...editing, name: e.target.value})} placeholder="Enter name" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block">Email</label>
                <input value={editing.email} onChange={(e)=>setEditing({...editing, email: e.target.value})} placeholder="Enter email" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block">Phone</label>
                <input value={editing.phone} onChange={(e)=>setEditing({...editing, phone: e.target.value})} placeholder="Enter phone" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block">Message</label>
                <textarea value={editing.message} onChange={(e)=>setEditing({...editing, message: e.target.value})} placeholder="Enter message" className="border p-2 w-full" />
              </div>
              <div>
                <label className="block">Status</label>
                <select value={editing.status || 'new'} onChange={(e)=>setEditing({...editing, status: e.target.value})} className="border p-2 w-full" title="Select inquiry status">
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in-progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={()=>setEditing(null)} className="mr-2 px-4 py-2">Cancel</button>
              <button onClick={()=>saveEdit(editing.id, { name: editing.name, email: editing.email, phone: editing.phone, message: editing.message, status: editing.status })} className="px-4 py-2 bg-black text-white">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;