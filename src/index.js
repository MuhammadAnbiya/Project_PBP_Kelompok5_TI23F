// Mengimpor aplikasi dari app.js
const app = require('../src/app');

// Mengatur port dari environment atau menggunakan default port 3000
const PORT = process.env.PORT || 3000;

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
