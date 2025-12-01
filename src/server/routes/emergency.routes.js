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
 *         nama: "Emergency Room"
 *         deskripsi: "<p>Fully equipped emergency care unit</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Emergency
 *   description: API for managing Emergency Room (ER/IGD) information
 */

/**
 * @swagger
 * /api/emergency:
 *   get:
 *     summary: Retrieve all emergency room records
 *     tags: [Emergency]
 *     responses:
 *       200:
 *         description: Successfully retrieved all emergency records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emergency'
 *       500:
 *         description: Server error occurred
 */
router.get("/emergency", getAllEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   get:
 *     summary: Retrieve emergency room record by ID
 *     tags: [Emergency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Emergency record ID
 *     responses:
 *       200:
 *         description: Emergency data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Emergency'
 *       404:
 *         description: Emergency record not found
 *       500:
 *         description: Server error occurred
 */
router.get("/emergency/:id", getEmergencyById);

/**
 * @swagger
 * /api/emergency:
 *   post:
 *     summary: Create a new emergency room record
 *     tags: [Emergency]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emergency'
 *     responses:
 *       201:
 *         description: Emergency record created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/emergency", insertEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   put:
 *     summary: Update emergency room record by ID
 *     tags: [Emergency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Emergency record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emergency'
 *     responses:
 *       200:
 *         description: Emergency record updated successfully
 *       404:
 *         description: Emergency record not found
 *       500:
 *         description: Server error occurred
 */
router.put("/emergency/:id", updateEmergency);

/**
 * @swagger
 * /api/emergency/{id}:
 *   delete:
 *     summary: Delete emergency room record by ID
 *     tags: [Emergency]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Emergency record ID
 *     responses:
 *       200:
 *         description: Emergency record deleted successfully
 *       404:
 *         description: Emergency record not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/emergency/:id", deleteEmergency);

export default router;
