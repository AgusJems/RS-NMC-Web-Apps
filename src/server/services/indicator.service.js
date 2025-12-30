import pool from "../../../config/db.js";

const indicatorService = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM indicator ORDER BY id DESC");
    return rows;
  },

  getActive: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM indicator WHERE status = 1 ORDER BY id DESC"
    );
    return rows;
  },

  getById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM indicator WHERE id = ?", [id]);
    return rows[0];
  },

  insert: async ({ image, nama }) => {
    await pool.query(
      `INSERT INTO indicator (image, nama)
       VALUES (?, ?)`,
      [image, nama]
    );
  },

  update: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    await pool.query(`UPDATE indicator SET ${setClause} WHERE id = ?`, values);
  },

  deleteById: async (id) => {
    await pool.query("DELETE FROM indicator WHERE id = ?", [id]);
  },
};

export default indicatorService;
