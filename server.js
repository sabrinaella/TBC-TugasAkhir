const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const authRoutes = require('./routes/authRoutes');
// userRoutes dan photoRoutes nanti ditambahkan
const userRoutes = require('./routes/userRoutes');
const photoRoutes = require('./routes/photoRoutes');

app.use('/uploads', express.static('uploads')); // agar bisa akses gambar dari URL
app.use('/api/users', userRoutes);
app.use('/api/photos', photoRoutes);

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
