import inpatientService from "../services/inpatient.service.js";

export const getAllInpatient = async (req, res) => {
  try {
    const data = await inpatientService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching inpatient data" });
  }
};

export const getActiveInpatient = async (req, res) => {
  try {
    const data = await inpatientService.getActive();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching active inpatient" });
  }
};

export const getInpatientById = async (req, res) => {
  try {
    const data = await inpatientService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching inpatient" });
  }
};

export const insertInpatient = async (req, res) => {
  try {
    await inpatientService.insert(req.body);
    res.status(201).json({ message: "Inpatient added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding inpatient" });
  }
};

export const updateInpatient = async (req, res) => {
  try {
    await inpatientService.update(req.params.id, req.body);
    res.status(200).json({ message: "Inpatient updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating inpatient" });
  }
};

export const deleteInpatient = async (req, res) => {
  try {
    await inpatientService.deleteById(req.params.id);
    res.status(200).json({ message: "Inpatient deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting inpatient" });
  }
};
