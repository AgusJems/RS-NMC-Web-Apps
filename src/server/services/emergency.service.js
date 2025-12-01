import pool from "../../../config/db.js";

const emergencyService = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM emergency ORDER BY id DESC");
    return rows;
  },

  getActive: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM emergency WHERE status = 1 ORDER BY id DESC"
    );
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM emergency WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  insert: async ({ image, nama, deskripsi }) => {
    await pool.query(
      `INSERT INTO emergency (image, nama, deskripsi)
       VALUES (?, ?, ?)`,
      [image, nama, deskripsi]
    );
  },

  update: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    await pool.query(`UPDATE emergency SET ${setClause} WHERE id = ?`, values);
  },

  deleteById: async (id) => {
    await pool.query("DELETE FROM emergency WHERE id = ?", [id]);
  },
};

export default emergencyService;
