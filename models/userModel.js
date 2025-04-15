const db = require('./db');

const getAllUsers = (callback) => {
  db.query('SELECT id, name, email, role, profile_photo FROM users', callback);
};

const getUserById = (id, callback) => {
  db.query('SELECT id, name, email, role, profile_photo FROM users WHERE id = ?', [id], callback);
};

const updateUser = (id, data, callback) => {
  const { name, email, profile_photo } = data;
  db.query('UPDATE users SET name = ?, email = ?, profile_photo = ? WHERE id = ?', 
    [name, email, profile_photo, id], callback);
};

const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
