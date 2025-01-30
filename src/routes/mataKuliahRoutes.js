const express = require('express');
const router = express.Router();
const {
  createMataKuliah,
  getAllMataKuliah,
  getMataKuliahById,
  updateMataKuliah,
  deleteMataKuliah
} = require('../controller/mataKuliahController');

// Route untuk membuat Mata Kuliah
router.post('/', createMataKuliah);

// Route untuk mendapatkan semua Mata Kuliah
router.get('/', getAllMataKuliah);

// Route untuk mendapatkan Mata Kuliah berdasarkan ID
router.get('/:id', getMataKuliahById);

// Route untuk mengupdate Mata Kuliah berdasarkan ID
router.put('/:id', updateMataKuliah);

// Route untuk menghapus Mata Kuliah berdasarkan ID
router.delete('/:id', deleteMataKuliah);

module.exports = router;
