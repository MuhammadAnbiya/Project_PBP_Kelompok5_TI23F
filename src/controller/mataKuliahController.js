const { PrismaClient } = require('@prisma/client'); // Perbaikan impor
const prisma = new PrismaClient(); // Inisialisasi PrismaClient

// Create Mata Kuliah
const createMataKuliah = async (req, res) => {
  const { kode, nama, sks, dosenId } = req.body;
  try {
    const mataKuliah = await prisma.mataKuliah.create({
      data: { kode, nama, sks, dosenId }
    });
    res.status(201).json(mataKuliah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Mata Kuliah
const getAllMataKuliah = async (req, res) => {
  try {
    const mataKuliah = await prisma.mataKuliah.findMany();
    res.status(200).json(mataKuliah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Mata Kuliah by ID
const getMataKuliahById = async (req, res) => {
  const { id } = req.params;
  try {
    const mataKuliah = await prisma.mataKuliah.findUnique({
      where: { id: parseInt(id) }
    });
    if (!mataKuliah) {
      return res.status(404).json({ message: 'Mata Kuliah not found' });
    }
    res.status(200).json(mataKuliah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Mata Kuliah
const updateMataKuliah = async (req, res) => {
  const { id } = req.params;
  const { kode, nama, sks, dosenId } = req.body;
  try {
    const mataKuliah = await prisma.mataKuliah.update({
      where: { id: parseInt(id) },
      data: { kode, nama, sks, dosenId }
    });
    res.status(200).json(mataKuliah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Mata Kuliah
const deleteMataKuliah = async (req, res) => {
  const { id } = req.params;
  try {
    const mataKuliah = await prisma.mataKuliah.delete({
      where: { id: parseInt(id) }
    });
    res.status(200).json({ message: 'Mata Kuliah deleted successfully', mataKuliah });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMataKuliah,
  getAllMataKuliah,
  getMataKuliahById,
  updateMataKuliah,
  deleteMataKuliah
};