import emergencyService from "../services/emergency.service.js";

export const getAllEmergency = async (req, res) => {
  try {
    const data = await emergencyService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching emergency data" });
  }
};

export const getActiveEmergency = async (req, res) => {
  try {
    const data = await emergencyService.getActive();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching active emergency" });
  }
};

export const getEmergencyById = async (req, res) => {
  try {
    const data = await emergencyService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching emergency" });
  }
};

export const insertEmergency = async (req, res) => {
  try {
    await emergencyService.insert(req.body);
    res.status(201).json({ message: "Emergency added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding emergency" });
  }
};

export const updateEmergency = async (req, res) => {
  try {
    await emergencyService.update(req.params.id, req.body);
    res.status(200).json({ message: "Emergency updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating emergency" });
  }
};

export const deleteEmergency = async (req, res) => {
  try {
    await emergencyService.deleteById(req.params.id);
    res.status(200).json({ message: "Emergency deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting emergency" });
  }
};
