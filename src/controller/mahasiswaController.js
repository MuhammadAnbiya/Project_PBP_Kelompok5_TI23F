const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client'); // Pastikan Anda mengimpor PrismaClient dengan benar
const prisma = new PrismaClient(); // Inisialisasi PrismaClient


// Mendapatkan semua Mahasiswa
const getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await prisma.mahasiswa.findMany();
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
  }
};

// Mendapatkan Mahasiswa berdasarkan ID
const getMahasiswaById = async (req, res) => {
  const { id } = req.params;
  try {
    const mahasiswa = await prisma.mahasiswa.findUnique({ where: { id: parseInt(id) } });
    if (!mahasiswa) {
      return res.status(404).json({ message: 'Mahasiswa tidak ditemukan!' });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
  }
};

// Membuat Mahasiswa baru (untuk admin)
const createMahasiswa = async (req, res) => {
  const { nim, nama, email, password, tanggalLahir, jurusan } = req.body;

  try {
    // Hash password sebelum menyimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    const mahasiswa = await prisma.mahasiswa.create({
      data: {
        nim,
        nama,
        email,
        password: hashedPassword,
        tanggalLahir: new Date(tanggalLahir),
        jurusan,
      },
    });

    res.status(201).json({ message: 'Mahasiswa berhasil dibuat!', mahasiswa });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
  }
};

// Mengupdate Mahasiswa berdasarkan ID
const updateMahasiswa = async (req, res) => {
  const { id } = req.params;
  const { nama, email, tanggalLahir, jurusan } = req.body;

  try {
    const mahasiswa = await prisma.mahasiswa.update({
      where: { id: parseInt(id) },
      data: { nama, email, tanggalLahir: new Date(tanggalLahir), jurusan },
    });

    res.status(200).json({ message: 'Mahasiswa berhasil diupdate!', mahasiswa });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
  }
};

// Menghapus Mahasiswa berdasarkan ID
const deleteMahasiswa = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.mahasiswa.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: 'Mahasiswa berhasil dihapus!' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server.', error: error.message });
  }
};

module.exports = {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
