import pool from "../../config/db.js";

const supportService = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM support ORDER BY id DESC");
    return rows;
  },

  getActive: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM support WHERE status = 1 ORDER BY id DESC"
    );
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM support WHERE id = ?", [id]);
    return rows[0];
  },

  insert: async ({ image, nama, deskripsi }) => {
    await pool.query(
      `INSERT INTO support (image, nama, deskripsi)
       VALUES (?, ?, ?)`,
      [image, nama, deskripsi]
    );
  },

  update: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    await pool.query(`UPDATE support SET ${setClause} WHERE id = ?`, values);
  },

  deleteById: async (id) => {
    await pool.query("DELETE FROM support WHERE id = ?", [id]);
  },
};

export default supportService;
