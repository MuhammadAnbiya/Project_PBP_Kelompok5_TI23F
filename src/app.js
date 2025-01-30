// Mengimpor dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Mengimpor routes untuk setiap entitas
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const dosenRoutes = require('./routes/dosenRoutes');
const mataKuliahRoutes = require('./routes/mataKuliahRoutes');
const nilaiRoutes = require('./routes/nilaiRoutes');

// Membuat instance aplikasi Express
const app = express();

// Middleware untuk memparsing JSON di request body
app.use(bodyParser.json());

// Root endpoint untuk memastikan server berjalan
app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi manajemen mahasiswa!');
});

// Menggunakan routes untuk setiap entitas
app.use('/mahasiswa', mahasiswaRoutes);
app.use('/dosen', dosenRoutes);
app.use('/mata-kuliah', mataKuliahRoutes);
app.use('/nilai', nilaiRoutes);

// Ekspor aplikasi Express untuk digunakan di file index.js
module.exports = app;