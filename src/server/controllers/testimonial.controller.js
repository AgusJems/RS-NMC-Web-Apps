import * as testimoniService from "../services/testimonial.service.js";

export const getAllTestimoni = async (req, res) => {
  try {
    const data = await testimoniService.getAll();
    res.status(200).json({ data });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTestimoniById = async (req, res) => {
  try {
    const data = await testimoniService.getById(req.params.id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ message: "Internal error" });
  }
};

export const insertTestimoni = async (req, res) => {
  try {
    await testimoniService.insert(req.body);
    res.status(201).json({ message: "Testimoni berhasil ditambahkan" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal menambahkan testimoni" });
  }
};

export const updateTestimoni = async (req, res) => {
  try {
    await testimoniService.update(req.params.id, req.body);
    res.status(200).json({ message: "Testimoni berhasil diperbarui" });
  } catch (err) {
    res.status(500).json({ message: "Gagal memperbarui testimoni" });
  }
};

export const updateStatusTestimoni = async (req, res) => {
  try {
    const { status } = req.body;

    if (status === undefined)
      return res.status(400).json({ message: "Status harus dikirim" });

    await testimoniService.updateStatus(req.params.id, status);
    res.status(200).json({ message: "Status testimoni berhasil diperbarui" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memperbarui status" });
  }
};

export const deleteTestimoni = async (req, res) => {
  try {
    await testimoniService.deleteById(req.params.id);
    res.status(200).json({ message: "Testimoni berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: "Gagal menghapus" });
  }
};
