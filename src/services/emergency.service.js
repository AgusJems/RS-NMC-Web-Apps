import pool from "../../config/db.js";

const emergencyService = {

  // GET ALL
  getAll: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM emergency ORDER BY id DESC"
    );
    return rows;
  },

  // GET ACTIVE ONLY
  getActive: async () => {
    const [rows] = await pool.query(
      "SELECT * FROM emergency WHERE status = 1 ORDER BY id DESC"
    );
    return rows;
  },

  // GET BY ID
  getById: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM emergency WHERE id = ?", [id]
    );
    return rows[0];
  },

  // INSERT
  insert: async ({ image, nama, deskripsi }) => {
    await pool.query(
      `INSERT INTO emergency (image, nama, deskripsi)
       VALUES (?, ?, ?)`,
      [image, nama, deskripsi]
    );
  },

  // UPDATE
  update: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    await pool.query(
      `UPDATE emergency SET ${setClause} WHERE id = ?`,
      values
    );
  },

  // DELETE
  deleteById: async (id) => {
    await pool.query("DELETE FROM emergency WHERE id = ?", [id]);
  },

};

export default emergencyService;
