const express = require('express');
const router = express.Router();
const {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} = require('../controller/mahasiswaController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { loginMahasiswa } = require('../controller/loginmahasiswa');

// Public route
router.post('/login', loginMahasiswa);
router.post('/creat', createMahasiswa);

// Protected routes
router.get('/', authenticateToken, getAllMahasiswa);
router.get('/:id', authenticateToken, getMahasiswaById);
router.put('/:id', authenticateToken, updateMahasiswa);
router.delete('/:id', authenticateToken, deleteMahasiswa);

module.exports = router;
