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
 * /api/inpatient:
 *   get:
 *     summary: Get all inpatient
 *     tags: [Inpatient]
 */
router.get("/inpatient", getAllInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   get:
 *     summary: Get inpatient by ID
 *     tags: [Inpatient]
 */
router.get("/inpatient/:id", getInpatientById);

/**
 * @swagger
 * /api/inpatient:
 *   post:
 *     summary: Insert inpatient
 *     tags: [Inpatient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inpatient'
 */
router.post("/inpatient", insertInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   put:
 *     summary: Update inpatient
 *     tags: [Inpatient]
 */
router.put("/inpatient/:id", updateInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   delete:
 *     summary: Delete inpatient
 *     tags: [Inpatient]
 */
router.delete("/inpatient/:id", deleteInpatient);

export default router;
