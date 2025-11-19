import pool from "../../config/db.js";

const newsService = {
  getAllNews: async () => {
    try {
      const query = `
                SELECT b.*, j.nama AS jenis_nama, j.kode AS jenis_kode
                FROM berita b
                LEFT JOIN jenis_berita j ON j.id = b.jenis_id
                ORDER BY b.id DESC
            `;
      return await pool.query(query);
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  },

  getActiveNews: async () => {
    try {
      const query = `
                SELECT b.*, j.nama AS jenis_nama
                FROM berita b
                LEFT JOIN jenis_berita j ON j.id = b.jenis_id
                WHERE b.status = 1
                ORDER BY b.id DESC
            `;
      return await pool.query(query);
    } catch (error) {
      console.error("Error fetching active news:", error);
      throw error;
    }
  },

  getJenisBerita: async () => {
    try {
      const query = `SELECT id, nama, kode FROM jenis_berita ORDER BY nama ASC`;
      return await pool.query(query);
    } catch (error) {
      console.error("Error fetching jenis berita:", error);
      throw error;
    }
  },

  insertDetailNews: async (jenis_id, nama_berita, deskripsi, image) => {
    try {
      const query = `
                INSERT INTO berita (jenis_id, nama_berita, deskripsi, image)
                VALUES (?, ?, ?, ?)
            `;
      return await pool.query(query, [jenis_id, nama_berita, deskripsi, image]);
    } catch (error) {
      console.error("Error inserting news:", error);
      throw error;
    }
  },

  updateNews: async (id, updateData) => {
    try {
      const setClauses = Object.keys(updateData)
        .map((key) => `${key} = ?`)
        .join(", ");

      const values = [...Object.values(updateData), id];

      const query = `UPDATE berita SET ${setClauses} WHERE id = ?`;

      await pool.query(query, values);

      return true;
    } catch (error) {
      console.error(`Error updating news with ID ${id}:`, error);
      throw error;
    }
  },

  deleteNews: async (id) => {
    try {
      const query = `DELETE FROM berita WHERE id = ?`;
      return await pool.query(query, [id]);
    } catch (error) {
      console.error("Error deleting news:", error);
      throw error;
    }
  },

  getNewsById: async (id) => {
    try {
      const query = `
                SELECT b.*, j.nama AS jenis_nama
                FROM berita b
                LEFT JOIN jenis_berita j ON j.id = b.jenis_id
                WHERE b.id = ?
            `;
      const [result] = await pool.query(query, [id]);
      return result;
    } catch (error) {
      console.error("Error fetching news by ID:", error);
      throw error;
    }
  },
};

export default newsService;
