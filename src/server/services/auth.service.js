// src/services/auth.service.js
import pool from "../../../config/db.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123';

class AuthService {

  async login(username, password) {
    const [rows] = await pool.query(
      `SELECT * FROM users WHERE username = ? LIMIT 1`,
      [username]
    );

    if (rows.length === 0) {
      throw new Error("User tidak ditemukan");
    }

    const user = rows[0];

    console.log("=== DEBUG LOGIN (BCRYPT) ===");
    console.log("Input password:", password);
    console.log("Hash from DB:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Compare result:", isMatch);

    if (!isMatch) {
      throw new Error("Password salah");
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        nama_lengkap: user.nama_lengkap,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { token, user };
  }
}

export default new AuthService();
