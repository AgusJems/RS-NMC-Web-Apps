import educationService from "../services/education.service.js";

export const getEducationByDokterId = async (req, res) => {
  try {
    const dokter_id = req.params.dokter_id;
    const rows = await educationService.getByDokterId(dokter_id);
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching education:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const insertEducation = async (req, res) => {
  try {
    const { dokter_id, universitas, prodi, tahun_mulai, tahun_selesai } =
      req.body;

    await educationService.insert(
      dokter_id,
      universitas,
      prodi,
      tahun_mulai,
      tahun_selesai
    );

    res.status(201).json({ message: "Education added successfully" });
  } catch (error) {
    console.error("Error inserting education:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const id = req.params.id;
    const { universitas, prodi, tahun_mulai, tahun_selesai } = req.body;

    await educationService.update(
      id,
      universitas,
      prodi,
      tahun_mulai,
      tahun_selesai
    );

    res.status(200).json({ message: "Education updated successfully" });
  } catch (error) {
    console.error("Error updating education:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const id = req.params.id;
    await educationService.delete(id);

    res.status(200).json({ message: "Education deleted successfully" });
  } catch (error) {
    console.error("Error deleting education:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
