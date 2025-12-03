import pool from "../../../config/db.js";

const restoService = {
  getAll: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM resto ORDER BY created_at DESC"
    );
    return rows;
  },

  getActive: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM resto WHERE status = 1 ORDER BY id DESC"
    );
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM resto WHERE id = ?", [id]);
    return rows[0];
  },

  insert: async ({ image, title, deskripsi }) => {
    await pool.query(
      `INSERT INTO resto (image, title, deskripsi)
       VALUES (?, ?, ?)`,
      [image, title, deskripsi]
    );
  },

  update: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    await pool.query(`UPDATE resto SET ${setClause} WHERE id = ?`, values);
  },

  deleteById: async (id) => {
    await pool.query("DELETE FROM resto WHERE id = ?", [id]);
  },
};

export default restoService;
