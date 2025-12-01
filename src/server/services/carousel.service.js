import pool from "../../../config/db.js";

const carouselService = {
  getAllCarousel: async () => {
    const query = `SELECT * FROM carousel ORDER BY id DESC`;
    return await pool.query(query);
  },

  getActiveCarousel: async () => {
    const query = `SELECT * FROM carousel WHERE status = 1 ORDER BY id DESC`;
    return await pool.query(query);
  },

  getCarouselById: async (id) => {
    const query = `SELECT * FROM carousel WHERE id = ?`;
    const [result] = await pool.query(query, [id]);
    return result;
  },

  insertCarousel: async (title, deskripsi, image) => {
    const query = `
      INSERT INTO carousel (title, deskripsi, image)
      VALUES (?, ?, ?)
    `;
    return await pool.query(query, [title, deskripsi, image]);
  },

  updateCarousel: async (id, updateData) => {
    const setClause = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = [...Object.values(updateData), id];

    const query = `UPDATE carousel SET ${setClause} WHERE id = ?`;
    return await pool.query(query, values);
  },

  deleteCarousel: async (id) => {
    const query = `DELETE FROM carousel WHERE id = ?`;
    return await pool.query(query, [id]);
  },
};

export default carouselService;
