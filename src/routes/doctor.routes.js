import express from "express";
import {
  getAllDokter,
  getDokterById,
  getDokterByPoliId,
  insertDokter,
  updateDokter,
  deleteDokter,
} from "../controllers/doctor.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dokter
 *   description: API untuk mengelola data dokter
 */

/* =============================
   SCHEMA DEFINITIONS
============================= */

/**
 * @swagger
 * components:
 *   schemas:
 *     Dokter:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nama:
 *           type: string
 *         spesialis:
 *           type: string
 *         profile:
 *           type: string
 *         image:
 *           type: string
 *         poli_id:
 *           type: integer
 *       example:
 *         id: 1
 *         nama: "dr. Andi Pratama"
 *         spesialis: "Spesialis Penyakit Dalam"
 *         profile: "<p>Dokter dengan pengalaman 10 tahun</p>"
 *         image: "base64-image"
 *         poli_id: 3
 */

/* =============================
   ROUTES
============================= */

/**
 * @swagger
 * /api/getAllDokter:
 *   get:
 *     summary: Ambil semua data dokter
 *     tags: [Dokter]
 *     responses:
 *       200:
 *         description: List semua dokter
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.get("/getAllDokter", getAllDokter);

/**
 * @swagger
 * /api/getDokterByPoliId/{poli_id}:
 *   get:
 *     summary: Ambil daftar dokter berdasarkan poli_id
 *     tags: [Dokter]
 *     parameters:
 *       - in: path
 *         name: poli_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Daftar dokter berdasarkan poli_id
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.get("/getDokterByPoliId/:poli_id", getDokterByPoliId);

/**
 * @swagger
 * /api/getDokterById/{id}:
 *   get:
 *     summary: Ambil detail dokter berdasarkan ID
 *     tags: [Dokter]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail dokter
 *       404:
 *         description: Dokter tidak ditemukan
 */
router.get("/getDokterById/:id", getDokterById);

/**
 * @swagger
 * /api/insertDokter:
 *   post:
 *     summary: Tambah dokter baru
 *     tags: [Dokter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               spesialis:
 *                 type: string
 *               profile:
 *                 type: string
 *               image:
 *                 type: string
 *               poli_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Dokter berhasil dibuat
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.post("/insertDokter", insertDokter);

/**
 * @swagger
 * /api/updateDokter/{id}:
 *   put:
 *     summary: Perbarui data dokter
 *     tags: [Dokter]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Dokter berhasil diupdate
 *       404:
 *         description: Dokter tidak ditemukan
 */
router.put("/updateDokter/:id", updateDokter);

/**
 * @swagger
 * /api/deleteDokter/{id}:
 *   delete:
 *     summary: Hapus dokter berdasarkan ID
 *     tags: [Dokter]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dokter berhasil dihapus
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.delete("/deleteDokter/:id", deleteDokter);

export default router;
