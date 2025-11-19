import pool from "../../config/db.js";

const educationService = {
  getByDokterId: async (dokter_id) => {
    const [rows] = await pool.query(
      `SELECT * FROM pendidikan_dokter WHERE dokter_id = ? ORDER BY tahun_mulai DESC`,
      [dokter_id]
    );
    return rows;
  },

  insert: async (dokter_id, universitas, prodi, tahun_mulai, tahun_selesai) => {
    return await pool.query(
      `
      INSERT INTO pendidikan_dokter (dokter_id, universitas, prodi, tahun_mulai, tahun_selesai)
      VALUES (?, ?, ?, ?, ?)
      `,
      [dokter_id, universitas, prodi, tahun_mulai, tahun_selesai]
    );
  },

  update: async (id, universitas, prodi, tahun_mulai, tahun_selesai) => {
    return await pool.query(
      `
      UPDATE pendidikan_dokter 
      SET universitas = ?, prodi = ?, tahun_mulai = ?, tahun_selesai = ?
      WHERE id = ?
      `,
      [universitas, prodi, tahun_mulai, tahun_selesai, id]
    );
  },

  delete: async (id) => {
    return await pool.query(`DELETE FROM pendidikan_dokter WHERE id = ?`, [id]);
  },
};

export default educationService;
