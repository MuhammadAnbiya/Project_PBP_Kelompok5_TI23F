const { PrismaClient } = require('@prisma/client'); // Perbaikan impor
const prisma = new PrismaClient(); // Inisialisasi PrismaClient

// Create Dosen
const createDosen = async (req, res) => {
  const { nidn, nama, email, departemen } = req.body;
  try {
    const dosen = await prisma.dosen.create({
      data: { nidn, nama, email, departemen },
    });
    res.status(201).json(dosen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Dosen
const getAllDosen = async (req, res) => {
  try {
    const dosen = await prisma.dosen.findMany();
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Dosen by ID
const getDosenById = async (req, res) => {
  const { id } = req.params;
  try {
    const dosen = await prisma.dosen.findUnique({
      where: { id: parseInt(id) },
    });
    if (!dosen) {
      return res.status(404).json({ message: 'Dosen not found' });
    }
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Dosen
const updateDosen = async (req, res) => {
  const { id } = req.params;
  const { nidn, nama, email, departemen } = req.body;
  try {
    const dosen = await prisma.dosen.update({
      where: { id: parseInt(id) },
      data: { nidn, nama, email, departemen },
    });
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Dosen
const deleteDosen = async (req, res) => {
  const { id } = req.params;
  try {
    const dosen = await prisma.dosen.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Dosen deleted successfully', dosen });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDosen,
  getAllDosen,
  getDosenById,
  updateDosen,
  deleteDosen,
};
