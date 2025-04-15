const userModel = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id;
  userModel.getUserById(id, (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(results[0]);
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;

  if (req.user.role !== 'admin' && req.user.id != id) {
    return res.status(403).json({ error: 'Access denied' });
  }

  userModel.updateUser(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User updated' });
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admins only' });

  userModel.deleteUser(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User deleted' });
  });
};
