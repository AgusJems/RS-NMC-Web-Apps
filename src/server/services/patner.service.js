import pool from "../../../config/db.js";

const patnerService = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM patner ORDER BY id DESC");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM patner WHERE id = ?", [id]);
    return rows[0];
  },

  insert: async ({ name, image }) => {
    if (!name) throw new Error("Nama partner wajib diisi!");
    if (!image) throw new Error("Image wajib diisi!");

    await pool.query("INSERT INTO patner (name, image) VALUES (?, ?)", [
      name,
      image,
    ]);
  },

  update: async (id, updateData) => {
    const set = Object.keys(updateData)
      .map((k) => `${k} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    await pool.query(`UPDATE patner SET ${set} WHERE id = ?`, values);
  },

  deleteById: async (id) => {
    await pool.query("DELETE FROM patner WHERE id = ?", [id]);
  },
};

export default patnerService;
