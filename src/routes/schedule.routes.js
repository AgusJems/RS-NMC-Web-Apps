import express from "express";
import {
  getScheduleByDokterId,
  getAllHari,
  insertSchedule,
  updateSchedule,
  deleteSchedule,
} from "../controllers/schedule.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Schedule
 *   description: API Jadwal Praktik Dokter
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Schedule:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         dokter_id:
 *           type: integer
 *         hari_id:
 *           type: integer
 *         jam_mulai:
 *           type: string
 *           format: time
 *         jam_selesai:
 *           type: string
 *           format: time
 *       example:
 *         id: 1
 *         dokter_id: 5
 *         hari_id: 2
 *         jam_mulai: "08:00"
 *         jam_selesai: "12:00"
 */

/**
 * @swagger
 * /api/getScheduleByDokterId/{dokter_id}:
 *   get:
 *     summary: Ambil jadwal praktik berdasarkan dokter_id
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: dokter_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List jadwal praktik dokter
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.get("/getScheduleByDokterId/:dokter_id", getScheduleByDokterId);

/**
 * @swagger
 * /api/getAllHari:
 *   get:
 *     summary: Mengambil semua data hari
 *     tags: [Schedule]
 *     responses:
 *       200:
 *         description: Berhasil mengambil data hari
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.get("/getAllHari", getAllHari);

/**
 * @swagger
 * /api/insertSchedule:
 *   post:
 *     summary: Tambah jadwal praktik dokter
 *     tags: [Schedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dokter_id:
 *                 type: integer
 *               hari_id:
 *                 type: integer
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *             example:
 *               dokter_id: 5
 *               hari_id: 2
 *               jam_mulai: "08:00"
 *               jam_selesai: "12:00"
 *     responses:
 *       201:
 *         description: Jadwal berhasil ditambahkan
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.post("/insertSchedule", insertSchedule);

/**
 * @swagger
 * /api/updateSchedule/{id}:
 *   put:
 *     summary: Update jadwal praktik dokter
 *     tags: [Schedule]
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
 *             properties:
 *               hari_id:
 *                 type: integer
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *             example:
 *               hari_id: 3
 *               jam_mulai: "09:00"
 *               jam_selesai: "13:00"
 *     responses:
 *       200:
 *         description: Jadwal berhasil diperbarui
 *       404:
 *         description: Jadwal tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.put("/updateSchedule/:id", updateSchedule);

/**
 * @swagger
 * /api/deleteSchedule/{id}:
 *   delete:
 *     summary: Hapus jadwal praktik dokter
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jadwal berhasil dihapus
 *       500:
 *         description: Terjadi kesalahan pada server
 */
router.delete("/deleteSchedule/:id", deleteSchedule);

export default router;
