import express from "express";
import {
  getAllInpatient,
  getInpatientById,
  insertInpatient,
  updateInpatient,
  deleteInpatient,
} from "../controllers/inpatient.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Inpatient:
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
 *         nama: "Ruang Mawar"
 *         deskripsi: "<p>Ruang rawat inap kelas I</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Inpatient
 *   description: API Rawat Inap Rumah Sakit
 */

/**
 * @swagger
 * /api/inpatient:
 *   get:
 *     summary: Get all inpatient rooms
 *     tags: [Inpatient]
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data rawat inap
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inpatient'
 */
router.get("/inpatient", getAllInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   get:
 *     summary: Get inpatient by ID
 *     tags: [Inpatient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID ruangan rawat inap
 *     responses:
 *       200:
 *         description: Data rawat inap ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inpatient'
 *       404:
 *         description: Data tidak ditemukan
 */
router.get("/inpatient/:id", getInpatientById);

/**
 * @swagger
 * /api/inpatient:
 *   post:
 *     summary: Insert inpatient room
 *     tags: [Inpatient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inpatient'
 *     responses:
 *       200:
 *         description: Berhasil menambahkan data rawat inap
 */
router.post("/inpatient", insertInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   put:
 *     summary: Update inpatient room
 *     tags: [Inpatient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID rawat inap
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inpatient'
 *     responses:
 *       200:
 *         description: Berhasil update data rawat inap
 *       404:
 *         description: Data tidak ditemukan
 */
router.put("/inpatient/:id", updateInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   delete:
 *     summary: Delete inpatient room
 *     tags: [Inpatient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data rawat inap berhasil dihapus
 *       404:
 *         description: Data tidak ditemukan
 */
router.delete("/inpatient/:id", deleteInpatient);

export default router;
