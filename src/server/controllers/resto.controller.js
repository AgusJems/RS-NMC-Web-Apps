import restoService from "../services/resto.service.js";

export const getAllResto = async (req, res) => {
  try {
    const data = await restoService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching resto data" });
  }
};

export const getActiveResto = async (req, res) => {
  try {
    const data = await restoService.getActive();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching active resto" });
  }
};

export const getRestoById = async (req, res) => {
  try {
    const data = await restoService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching resto" });
  }
};

export const insertResto = async (req, res) => {
  try {
    await restoService.insert(req.body);
    res.status(201).json({ message: "resto added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding resto" });
  }
};

export const updateResto = async (req, res) => {
  try {
    await restoService.update(req.params.id, req.body);
    res.status(200).json({ message: "resto updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating resto" });
  }
};

export const deleteResto = async (req, res) => {
  try {
    await restoService.deleteById(req.params.id);
    res.status(200).json({ message: "resto deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting resto" });
  }
};
