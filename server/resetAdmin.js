const bcrypt = require('bcryptjs');
const db = require('./db');

const newPass = process.argv[2];
if (!newPass) {
  console.error('Usage: node resetAdmin.js <newPassword>');
  process.exit(1);
}

const hash = bcrypt.hashSync(newPass, 10);
try {
  db.setAdminPassword(hash);
  console.log('Admin password updated successfully.');
  process.exit(0);
} catch (err) {
  console.error('Error updating admin password', err);
  process.exit(1);
}
