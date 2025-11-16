import pool from "../../config/db.js";

const poliService = {
  /* GET ALL */
  getAllPoli: async () => {
    const query = `SELECT * FROM poli ORDER BY id DESC`;
    return await pool.query(query);
  },

  /* GET ACTIVE */
  getActivePoli: async () => {
    const query = `SELECT * FROM poli WHERE status = 1 ORDER BY id DESC`;
    return await pool.query(query);
  },

  /* GET BY ID */
  getPoliById: async (id) => {
    const query = `SELECT * FROM poli WHERE id = ?`;
    const [result] = await pool.query(query, [id]);
    return result;
  },

  /* INSERT */
  insertPoli: async (nama_poli, deskripsi, image) => {
    const query = `
      INSERT INTO poli (nama_poli, deskripsi, image)
      VALUES (?, ?, ?)
    `;
    return await pool.query(query, [nama_poli, deskripsi, image]);
  },

  /* UPDATE */
  updatePoli: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    const query = `UPDATE poli SET ${setClause} WHERE id = ?`;
    return await pool.query(query, values);
  },

  /* DELETE */
  deletePoli: async (id) => {
    const query = `DELETE FROM poli WHERE id = ?`;
    return await pool.query(query, [id]);
  }
};

export default poliService;
