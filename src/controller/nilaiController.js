const { PrismaClient } = require('@prisma/client'); // Perbaikan impor
const prisma = new PrismaClient(); // Inisialisasi PrismaClient

// Create Nilai
const createNilai = async (req, res) => {
  const { mahasiswaId, mataKuliahId, nilai } = req.body;
  try {
    const nilaiRecord = await prisma.nilai.create({
      data: { mahasiswaId, mataKuliahId, nilai }
    });
    res.status(201).json(nilaiRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Nilai
const getAllNilai = async (req, res) => {
  try {
    const nilai = await prisma.nilai.findMany();
    res.status(200).json(nilai);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Nilai by ID
const getNilaiById = async (req, res) => {
  const { id } = req.params;
  try {
    const nilai = await prisma.nilai.findUnique({
      where: { id: parseInt(id) }
    });
    if (!nilai) {
      return res.status(404).json({ message: 'Nilai not found' });
    }
    res.status(200).json(nilai);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Nilai
const updateNilai = async (req, res) => {
  const { id } = req.params;
  const { mahasiswaId, mataKuliahId, nilai } = req.body;
  try {
    const nilaiRecord = await prisma.nilai.update({
      where: { id: parseInt(id) },
      data: { mahasiswaId, mataKuliahId, nilai }
    });
    res.status(200).json(nilaiRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Nilai
const deleteNilai = async (req, res) => {
  const { id } = req.params;
  try {
    const nilai = await prisma.nilai.delete({
      where: { id: parseInt(id) }
    });
    res.status(200).json({ message: 'Nilai deleted successfully', nilai });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNilai,
  getAllNilai,
  getNilaiById,
  updateNilai,
  deleteNilai
};