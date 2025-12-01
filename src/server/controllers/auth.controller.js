// src/controllers/auth.controller.js
import AuthService from '../services/auth.service.js';

class AuthController {

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const { token, user } = await AuthService.login(username, password);

      res.json({
        message: "Login berhasil",
        token,
        user: {
          id: user.id,
          username: user.username,
          nama_lengkap: user.nama_lengkap,
        }
      });

    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default new AuthController();
