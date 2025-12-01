import pool from "../../../config/db.js";

const dokterService = {
  getAllDokter: async () => {
    const query = `
      SELECT d.*, p.nama_poli
      FROM dokter d
      LEFT JOIN poli p ON p.id = d.poli_id
      ORDER BY d.id DESC
    `;
    return await pool.query(query);
  },

  getDokterByPoliId: async (poli_id) => {
    const [rows] = await pool.query(`SELECT * FROM dokter WHERE poli_id = ?`, [
      poli_id,
    ]);
    return rows;
  },

  getDokterById: async (id) => {
    const [rows] = await pool.query(`SELECT * FROM dokter WHERE id = ?`, [id]);
    return rows;
  },

  insertDokter: async (nama, spesialis, profile, image, poli_id) => {
    const query = `
      INSERT INTO dokter (nama, spesialis, profile, image, poli_id)
      VALUES (?, ?, ?, ?, ?)
    `;
    return await pool.query(query, [nama, spesialis, profile, image, poli_id]);
  },

  updateDokter: async (id, updateData) => {
    const setClauses = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    const query = `UPDATE dokter SET ${setClauses} WHERE id = ?`;
    return await pool.query(query, values);
  },

  deleteDokter: async (id) => {
    return await pool.query(`DELETE FROM dokter WHERE id = ?`, [id]);
  },
};

export default dokterService;
