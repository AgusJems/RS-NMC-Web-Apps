import express from "express";
import {
  getAllSupport,
  getSupportById,
  insertSupport,
  updateSupport,
  deleteSupport,
} from "../controllers/support.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Support:
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
 *         nama: "Fasilitas Pendukung"
 *         deskripsi: "<p>Contoh fasilitas pendukung di rumah sakit</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Support
 *   description: API Fasilitas Pendukung Rumah Sakit
 */

/**
 * @swagger
 * /api/support:
 *   get:
 *     summary: Get all support data
 *     tags: [Support]
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data support
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Support'
 */
router.get("/support", getAllSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   get:
 *     summary: Get support data by ID
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID support
 *     responses:
 *       200:
 *         description: Data support ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Support'
 *       404:
 *         description: Data tidak ditemukan
 */
router.get("/support/:id", getSupportById);

/**
 * @swagger
 * /api/support:
 *   post:
 *     summary: Insert new support data
 *     tags: [Support]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Support'
 *     responses:
 *       200:
 *         description: Data support berhasil ditambahkan
 */
router.post("/support", insertSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   put:
 *     summary: Update support data
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID support
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Support'
 *     responses:
 *       200:
 *         description: Data support berhasil diperbarui
 *       404:
 *         description: Data tidak ditemukan
 */
router.put("/support/:id", updateSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   delete:
 *     summary: Delete support data
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID support
 *     responses:
 *       200:
 *         description: Data support berhasil dihapus
 *       404:
 *         description: Data tidak ditemukan
 */
router.delete("/support/:id", deleteSupport);

export default router;
