import pool from "../../config/db.js";

const scheduleService = {
  getByDokterId: async (dokter_id) => {
    const [rows] = await pool.query(
      `
      SELECT jp.id, jp.jam_mulai, jp.jam_selesai, h.id AS hari_id, h.nama AS hari
      FROM jadwal_praktik jp
      JOIN hari h ON jp.hari_id = h.id
      WHERE jp.dokter_id = ?
      ORDER BY h.id
      `,
      [dokter_id]
    );
    return rows;
  },

  getAllHari: async () => {
    const [rows] = await pool.query(`
      SELECT * FROM hari ORDER BY id ASC
    `);
    return rows;
  },

  insert: async (dokter_id, hari_id, jam_mulai, jam_selesai) => {
    return await pool.query(
      `
      INSERT INTO jadwal_praktik (dokter_id, hari_id, jam_mulai, jam_selesai)
      VALUES (?, ?, ?, ?)
      `,
      [dokter_id, hari_id, jam_mulai, jam_selesai]
    );
  },

  update: async (id, hari_id, jam_mulai, jam_selesai) => {
    return await pool.query(
      `
      UPDATE jadwal_praktik SET 
      hari_id = ?, jam_mulai = ?, jam_selesai = ?
      WHERE id = ?
      `,
      [hari_id, jam_mulai, jam_selesai, id]
    );
  },

  delete: async (id) => {
    return await pool.query(`DELETE FROM jadwal_praktik WHERE id = ?`, [id]);
  },
};

export default scheduleService;
