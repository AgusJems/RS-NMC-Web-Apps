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
 *         nama: "Mawar Room"
 *         deskripsi: "<p>Class I inpatient room</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Inpatient
 *   description: API for managing inpatient rooms
 */

/**
 * @swagger
 * /api/inpatient:
 *   get:
 *     summary: Retrieve all inpatient rooms
 *     tags: [Inpatient]
 *     responses:
 *       200:
 *         description: Successfully retrieved all inpatient room data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inpatient'
 *       500:
 *         description: Server error occurred
 */
router.get("/inpatient", getAllInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   get:
 *     summary: Retrieve inpatient room by ID
 *     tags: [Inpatient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Inpatient room ID
 *     responses:
 *       200:
 *         description: Inpatient room data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inpatient'
 *       404:
 *         description: Inpatient room not found
 *       500:
 *         description: Server error occurred
 */
router.get("/inpatient/:id", getInpatientById);

/**
 * @swagger
 * /api/inpatient:
 *   post:
 *     summary: Create a new inpatient room
 *     tags: [Inpatient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inpatient'
 *     responses:
 *       201:
 *         description: Inpatient room created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/inpatient", insertInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   put:
 *     summary: Update inpatient room by ID
 *     tags: [Inpatient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Inpatient room ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inpatient'
 *     responses:
 *       200:
 *         description: Inpatient room updated successfully
 *       404:
 *         description: Inpatient room not found
 *       500:
 *         description: Server error occurred
 */
router.put("/inpatient/:id", updateInpatient);

/**
 * @swagger
 * /api/inpatient/{id}:
 *   delete:
 *     summary: Delete inpatient room by ID
 *     tags: [Inpatient]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Inpatient room ID
 *     responses:
 *       200:
 *         description: Inpatient room deleted successfully
 *       404:
 *         description: Inpatient room not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/inpatient/:id", deleteInpatient);

export default router;
