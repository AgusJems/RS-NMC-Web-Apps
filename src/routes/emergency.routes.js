import express from "express";
import {
  getAllEmergency,
  getEmergencyById,
  insertEmergency,
  updateEmergency,
  deleteEmergency,
} from "../controllers/emergency.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Emergency:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         image:
 *           type: string
 *         nama:
 *           type: string
 *         deskripsi:
 *           type: string
 *         status:
 *           type: integer
 *       example:
 *         id: 1
 *         image: "data:image/png;base64,xxxxx"
 *         nama: "Instalasi Gawat Darurat"
 *         deskripsi: "<p>Instalasi gawat darurat dengan fasilitas lengkap</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Emergency
 *   description: API IGD Rumah Sakit
 */

/**
 * @swagger
 * /api/emergency:
 *   get:
 *     summary: Get all emergency data
 *     tags: [Emergency]
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data IGD
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emergency'
 */
router.get("/emergency", getAllEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   get:
 *     summary: Get emergency data by ID
 *     tags: [Emergency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID emergency
 *     responses:
 *       200:
 *         description: Data emergency ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Emergency'
 *       404:
 *         description: Data tidak ditemukan
 */
router.get("/emergency/:id", getEmergencyById);

/**
 * @swagger
 * /api/emergency:
 *   post:
 *     summary: Insert new emergency data
 *     tags: [Emergency]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emergency'
 *     responses:
 *       200:
 *         description: Berhasil menambahkan data emergency
 */
router.post("/emergency", insertEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   put:
 *     summary: Update emergency data
 *     tags: [Emergency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID emergency
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emergency'
 *     responses:
 *       200:
 *         description: Berhasil mengupdate data emergency
 *       404:
 *         description: Data tidak ditemukan
 */
router.put("/emergency/:id", updateEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   delete:
 *     summary: Delete emergency data
 *     tags: [Emergency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID emergency
 *     responses:
 *       200:
 *         description: Data emergency berhasil dihapus
 *       404:
 *         description: Data tidak ditemukan
 */
router.delete("/emergency/:id", deleteEmergency);

export default router;
