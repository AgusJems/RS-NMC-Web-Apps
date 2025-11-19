import patnerService from "../services/patner.service.js";

export const getAllPatner = async (req, res) => {
  try {
    const data = await patnerService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPatnerById = async (req, res) => {
  try {
    const data = await patnerService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data" });
  }
};

export const insertPatner = async (req, res) => {
  try {
    await patnerService.insert(req.body);
    res.status(201).json({ message: "Partner berhasil ditambahkan" });
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message || "Gagal menambahkan partner" });
  }
};

export const updatePatner = async (req, res) => {
  try {
    await patnerService.update(req.params.id, req.body);
    res.status(200).json({ message: "Partner berhasil diperbarui" });
  } catch (err) {
    res.status(500).json({ message: "Gagal memperbarui partner" });
  }
};

export const deletePatner = async (req, res) => {
  try {
    await patnerService.deleteById(req.params.id);
    res.status(200).json({ message: "Partner berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: "Gagal menghapus partner" });
  }
};
