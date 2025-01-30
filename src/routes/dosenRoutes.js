const express = require('express');
const router = express.Router();
const {
  createDosen,
  getAllDosen,
  getDosenById,
  updateDosen,
  deleteDosen
} = require('../controller/dosenController');

// Route untuk membuat Dosen
router.post('/', createDosen);

// Route untuk mendapatkan semua Dosen
router.get('/', getAllDosen);

// Route untuk mendapatkan Dosen berdasarkan ID
router.get('/:id', getDosenById);

// Route untuk mengupdate Dosen berdasarkan ID
router.put('/:id', updateDosen);

// Route untuk menghapus Dosen berdasarkan ID
router.delete('/:id', deleteDosen);

module.exports = router;
