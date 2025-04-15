const mysql = require('mysql2');
// Membuat koneksi dengan MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 10000 // Timeout 10 detik
});

// Menghubungkan ke database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Mengeksport koneksi untuk digunakan di file lain
module.exports = connection;
