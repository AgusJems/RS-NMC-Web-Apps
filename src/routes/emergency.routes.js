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
 *         nama: "Ruang Mawar"
 *         deskripsi: "<p>Ruang rawat inap kelas I</p>"
 *         status: 1
 */

/**
 * @swagger
 * /api/emergency:
 *   get:
 *     summary: Get all emergency
 *     tags: [Emergency]
 */
router.get("/emergency", getAllEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   get:
 *     summary: Get emergency by ID
 *     tags: [Emergency]
 */
router.get("/emergency/:id", getEmergencyById);

/**
 * @swagger
 * /api/emergency:
 *   post:
 *     summary: Insert emergency
 *     tags: [Emergency]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emergency'
 */
router.post("/emergency", insertEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   put:
 *     summary: Update emergency
 *     tags: [Emergency]
 */
router.put("/emergency/:id", updateEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   delete:
 *     summary: Delete emergency
 *     tags: [Emergency]
 */
router.delete("/emergency/:id", deleteEmergency);

export default router;
