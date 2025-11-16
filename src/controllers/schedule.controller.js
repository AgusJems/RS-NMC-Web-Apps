import scheduleService from "../services/schedule.service.js";

export const getScheduleByDokterId = async (req, res) => {
  try {
    const { dokter_id } = req.params;
    const rows = await scheduleService.getByDokterId(dokter_id);
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllHari = async (req, res) => {
  try {
    const rows = await scheduleService.getAllHari();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching hari:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const insertSchedule = async (req, res) => {
  try {
    const { dokter_id, hari_id, jam_mulai, jam_selesai } = req.body;

    await scheduleService.insert(dokter_id, hari_id, jam_mulai, jam_selesai);
    res.status(201).json({ message: "Schedule added successfully" });
  } catch (error) {
    console.error("Error inserting schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { hari_id, jam_mulai, jam_selesai } = req.body;

    await scheduleService.update(id, hari_id, jam_mulai, jam_selesai);
    res.status(200).json({ message: "Schedule updated successfully" });
  } catch (error) {
    console.error("Error updating schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    await scheduleService.delete(id);
    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    console.error("Error deleting schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
