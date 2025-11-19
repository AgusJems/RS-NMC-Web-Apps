import pool from "../../config/db.js";

const poliService = {
  getAllPoli: async () => {
    const query = `SELECT * FROM poli ORDER BY id DESC`;
    return await pool.query(query);
  },

  getActivePoli: async () => {
    const query = `SELECT * FROM poli WHERE status = 1 ORDER BY id DESC`;
    return await pool.query(query);
  },

  getPoliById: async (id) => {
    const query = `SELECT * FROM poli WHERE id = ?`;
    const [result] = await pool.query(query, [id]);
    return result;
  },

  insertPoli: async (nama_poli, deskripsi, image) => {
    const query = `
      INSERT INTO poli (nama_poli, deskripsi, image)
      VALUES (?, ?, ?)
    `;
    return await pool.query(query, [nama_poli, deskripsi, image]);
  },

  updatePoli: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    const query = `UPDATE poli SET ${setClause} WHERE id = ?`;
    return await pool.query(query, values);
  },

  deletePoli: async (id) => {
    const query = `DELETE FROM poli WHERE id = ?`;
    return await pool.query(query, [id]);
  },
};

export default poliService;
