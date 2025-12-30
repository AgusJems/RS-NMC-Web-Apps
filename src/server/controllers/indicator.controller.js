import indicatorService from "../services/indicator.service.js";

export const getAllIndicator = async (req, res) => {
  try {
    const data = await indicatorService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching indicator data" });
  }
};

export const getActiveIndicator = async (req, res) => {
  try {
    const data = await indicatorService.getActive();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching active indicator" });
  }
};

export const getIndicatorById = async (req, res) => {
  try {
    const data = await indicatorService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Error fetching indicator" });
  }
};

export const insertIndicator = async (req, res) => {
  try {
    await indicatorService.insert(req.body);
    res.status(201).json({ message: "Indicator added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding indicator" });
  }
};

export const updateIndicator = async (req, res) => {
  try {
    await indicatorService.update(req.params.id, req.body);
    res.status(200).json({ message: "Indicator updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating indicator" });
  }
};

export const deleteIndicator = async (req, res) => {
  try {
    await indicatorService.deleteById(req.params.id);
    res.status(200).json({ message: "Indicator deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting indicator" });
  }
};
