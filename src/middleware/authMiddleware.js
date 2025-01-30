const jwt = require('jsonwebtoken');

const SECRET_KEY = "your_secret_key"; // Sama dengan secret key di authController

// Middleware untuk memverifikasi token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Token dikirim dalam format "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Token tidak ditemukan!" });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Simpan data user yang terdekode ke req
    next(); // Lanjut ke handler berikutnya
  } catch (error) {
    res.status(403).json({ message: "Token tidak valid!", error: error.message });
  }
};

module.exports = { authenticateToken };