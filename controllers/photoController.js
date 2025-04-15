const path = require('path');
const photoModel = require('../models/photoModel');

exports.upload = (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  const url = `${req.protocol}://${req.hostname}/uploads/${file.filename}`;

  photoModel.uploadPhoto(req.user.id, url, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Photo uploaded', url });
  });
};

exports.getMyPhotos = (req, res) => {
  photoModel.getPhotosByUser(req.user.id, (err, photos) => {
    if (err) return res.status(500).json({ error: err });
    res.json(photos);
  });
};

exports.getPublicGallery = (req, res) => {
  photoModel.getAllPublicPhotos((err, photos) => {
    if (err) return res.status(500).json({ error: err });
    res.json(photos);
  });
};
