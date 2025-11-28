import express from "express";
import {
  getAllPatner,
  getPatnerById,
  insertPatner,
  updatePatner,
  deletePatner,
} from "../controllers/patner.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Patner:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         image:
 *           type: string
 *       example:
 *         id: 1
 *         name: "RS Sehat Selalu"
 *         image: "data:image/png;base64,xxxxx"
 */

/**
 * @swagger
 * tags:
 *   name: Patner
 *   description: API Partner Rumah Sakit
 */

/**
 * @swagger
 * /api/patner:
 *   get:
 *     summary: Get all partner
 *     tags: [Patner]
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data partner
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patner'
 */
router.get("/patner", getAllPatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   get:
 *     summary: Get partner by ID
 *     tags: [Patner]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID partner
 *     responses:
 *       200:
 *         description: Data partner ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patner'
 *       404:
 *         description: Partner tidak ditemukan
 */
router.get("/patner/:id", getPatnerById);

/**
 * @swagger
 * /api/patner:
 *   post:
 *     summary: Insert partner
 *     tags: [Patner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patner'
 *     responses:
 *       200:
 *         description: Berhasil menambahkan partner
 */
router.post("/patner", insertPatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   put:
 *     summary: Update partner
 *     tags: [Patner]
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
 *             $ref: '#/components/schemas/Patner'
 *     responses:
 *       200:
 *         description: Berhasil mengupdate partner
 *       404:
 *         description: Partner tidak ditemukan
 */
router.put("/patner/:id", updatePatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   delete:
 *     summary: Delete partner
 *     tags: [Patner]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partner berhasil dihapus
 *       404:
 *         description: Partner tidak ditemukan
 */
router.delete("/patner/:id", deletePatner);

export default router;
