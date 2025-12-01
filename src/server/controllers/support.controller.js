import supportService from "../services/support.service.js";

export const getAllSupport = async (req, res) => {
  try {
    const data = await supportService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching support data" });
  }
};

export const getActiveSupport = async (req, res) => {
  try {
    const data = await supportService.getActive();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching active support" });
  }
};

export const getSupportById = async (req, res) => {
  try {
    const data = await supportService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching support" });
  }
};

export const insertSupport = async (req, res) => {
  try {
    await supportService.insert(req.body);
    res.status(201).json({ message: "Support added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding support" });
  }
};

export const updateSupport = async (req, res) => {
  try {
    await supportService.update(req.params.id, req.body);
    res.status(200).json({ message: "Support updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating support" });
  }
};

export const deleteSupport = async (req, res) => {
  try {
    await supportService.deleteById(req.params.id);
    res.status(200).json({ message: "Support deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting support" });
  }
};
