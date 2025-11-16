import dokterService from "../services/doctor.service.js";

const cleanBase64 = (img) => {
  if (!img) return "";
  return img.replace(/^data:image\/\w+;base64,/, "");
};


/* GET ALL */
export const getAllDokter = async (req, res) => {
  try {
    const [rows] = await dokterService.getAllDokter();
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching dokter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getDokterByPoliId = async (req, res) => {
    try {
      const poli_id = req.params.poli_id;
      const rows = await dokterService.getDokterByPoliId(poli_id);
        res.status(200).json({ data: rows });
    } catch (error) {
      console.error("Error fetching dokter by poli_id:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


/* GET BY ID */
export const getDokterById = async (req, res) => {
  try {
    const id = req.params.id;
    const rows = await dokterService.getDokterById(id);

    if (rows.length > 0)
      res.status(200).json({ data: rows[0] });
    else
      res.status(404).json({ message: "Dokter not found" });

  } catch (error) {
    console.error("Error fetching dokter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/* INSERT */
export const insertDokter = async (req, res) => {
  try {
    const { nama, spesialis, profile, image, poli_id } = req.body;

    const cleanImage = cleanBase64(image);

    await dokterService.insertDokter(
      nama,
      spesialis,
      profile,
      cleanImage,
      poli_id
    );

    res.status(201).json({ message: "Dokter created successfully" });
  } catch (error) {
    console.error("Error inserting dokter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


/* UPDATE */
export const updateDokter = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (body.image) {
      body.image = cleanBase64(body.image);
    }

    await dokterService.updateDokter(id, body);

    res.status(200).json({ message: "Dokter updated successfully" });
  } catch (error) {
    console.error("Error updating dokter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


/* DELETE */
export const deleteDokter = async (req, res) => {
  try {
    const id = req.params.id;
    await dokterService.deleteDokter(id);

    res.status(200).json({ message: "Dokter deleted successfully" });
  } catch (error) {
    console.error("Error deleting dokter:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
