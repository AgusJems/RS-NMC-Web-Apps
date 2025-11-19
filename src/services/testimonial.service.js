import pool from "../../config/db.js";

export const getAll = async () => {
  const [rows] = await pool.query("SELECT * FROM testimoni ORDER BY id DESC");
  return rows;
};

export const getById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM testimoni WHERE id = ?", [id]);
  return rows[0];
};

export const insert = async ({ nama, alamat, deskripsi, rating, status }) => {
  await pool.query(
    `INSERT INTO testimoni (nama, alamat, deskripsi, rating, status) 
     VALUES (?, ?, ?, ?, ?)`,
    [nama, alamat, deskripsi, rating, status ?? 1]
  );
};

export const update = async (id, data) => {
  const fields = [];
  const values = [];

  for (const key in data) {
    fields.push(`${key} = ?`);
    values.push(data[key]);
  }

  values.push(id);

  await pool.query(
    `UPDATE testimoni SET ${fields.join(", ")} WHERE id = ?`,
    values
  );
};

export const updateStatus = async (id, status) => {
  await pool.query(`UPDATE testimoni SET status = ? WHERE id = ?`, [
    status,
    id,
  ]);
};

export const deleteById = async (id) => {
  await pool.query("DELETE FROM testimoni WHERE id = ?", [id]);
};
