const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const SECRET_KEY = "your_secret_key";

const loginMahasiswa = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari mahasiswa berdasarkan email
    const mahasiswa = await prisma.mahasiswa.findUnique({ where: { email } });
    if (!mahasiswa) {
      return res.status(404).json({ message: 'Mahasiswa tidak ditemukan!' });
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, mahasiswa.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password salah!' });
    }

    // Buat token JWT
    const token = jwt.sign(
      { id: mahasiswa.id, email: mahasiswa.email }, // Payload
      SECRET_KEY, // Secret key
      { expiresIn: '1h' } // Token berlaku selama 1 jam
    );

    res.status(200).json({ message: 'Login berhasil!', token });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
  }
};

module.exports = { loginMahasiswa };
