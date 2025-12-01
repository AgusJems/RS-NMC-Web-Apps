import poliService from "../services/poly.service.js";

export const getAllPoli = async (req, res) => {
  try {
    const [rows] = await poliService.getAllPoli();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching poli:", error);
    res.status(500).json({ message: "Failed to fetch poli" });
  }
};

export const getActivePoli = async (req, res) => {
  try {
    const [rows] = await poliService.getActivePoli();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching active poli:", error);
    res.status(500).json({ message: "Failed to fetch active poli" });
  }
};

export const getPoliById = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await poliService.getPoliById(id);

    if (rows && rows.length > 0) {
      res.status(200).json({ data: rows[0] });
    } else {
      res.status(404).json({ message: "Poli not found" });
    }
  } catch (error) {
    console.error("Error fetching poli by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const insertPoli = async (req, res) => {
  try {
    const { nama_poli, deskripsi, image } = req.body;
    await poliService.insertPoli(nama_poli, deskripsi, image);
    res.status(201).json({ message: "Poli created successfully" });
  } catch (error) {
    console.error("Error inserting poli:", error);
    res.status(500).json({ message: "Failed to insert poli" });
  }
};

export const updatePoli = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    await poliService.updatePoli(id, updateData);

    res.status(200).json({ message: "Poli updated successfully" });
  } catch (error) {
    console.error("Error updating poli:", error);
    res.status(500).json({ message: "Failed to update poli" });
  }
};

export const deletePoli = async (req, res) => {
  try {
    const { id } = req.params;
    await poliService.deletePoli(id);

    res.status(200).json({ message: "Poli deleted successfully" });
  } catch (error) {
    console.error("Error deleting poli:", error);
    res.status(500).json({ message: "Failed to delete poli" });
  }
};
