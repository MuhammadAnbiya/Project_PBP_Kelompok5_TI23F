const express = require('express');
const router = express.Router();
const {
  createNilai,
  getAllNilai,
  getNilaiById,
  updateNilai,
  deleteNilai
} = require('../controller/nilaiController');

// Route untuk membuat Nilai
router.post('/', createNilai);

// Route untuk mendapatkan semua Nilai
router.get('/', getAllNilai);

// Route untuk mendapatkan Nilai berdasarkan ID
router.get('/:id', getNilaiById);

// Route untuk mengupdate Nilai berdasarkan ID
router.put('/:id', updateNilai);

// Route untuk menghapus Nilai berdasarkan ID
router.delete('/:id', deleteNilai);

module.exports = router;
