const db = require('./db');

const uploadPhoto = (user_id, url, callback) => {
  db.query('INSERT INTO photos (user_id, url) VALUES (?, ?)', [user_id, url], callback);
};

const getPhotosByUser = (user_id, callback) => {
  db.query('SELECT * FROM photos WHERE user_id = ? ORDER BY uploaded_at DESC', [user_id], callback);
};

const getAllPublicPhotos = (callback) => {
  db.query(`
    SELECT photos.*, users.name 
    FROM photos 
    JOIN users ON users.id = photos.user_id 
    ORDER BY uploaded_at DESC
  `, callback);
};

module.exports = {
  uploadPhoto,
  getPhotosByUser,
  getAllPublicPhotos
};
