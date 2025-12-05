import express from "express";
import {
  getAllResto,
  getRestoById,
  insertResto,
  updateResto,
  deleteResto,
} from "../controllers/resto.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Resto:
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
 *         deskripsi: "<p>Class I Resto room</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Resto
 *   description: API for managing Resto rooms
 */

/**
 * @swagger
 * /api/Resto:
 *   get:
 *     summary: Retrieve all Resto rooms
 *     tags: [Resto]
 *     responses:
 *       200:
 *         description: Successfully retrieved all Resto room data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resto'
 *       500:
 *         description: Server error occurred
 */
router.get("/Resto", getAllResto);

/**
 * @swagger
 * /api/Resto/{id}:
 *   get:
 *     summary: Retrieve Resto room by ID
 *     tags: [Resto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Resto room ID
 *     responses:
 *       200:
 *         description: Resto room data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resto'
 *       404:
 *         description: Resto room not found
 *       500:
 *         description: Server error occurred
 */
router.get("/Resto/:id", getRestoById);

/**
 * @swagger
 * /api/Resto:
 *   post:
 *     summary: Create a new Resto room
 *     tags: [Resto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resto'
 *     responses:
 *       201:
 *         description: Resto room created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/Resto", insertResto);

/**
 * @swagger
 * /api/Resto/{id}:
 *   put:
 *     summary: Update Resto room by ID
 *     tags: [Resto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Resto room ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resto'
 *     responses:
 *       200:
 *         description: Resto room updated successfully
 *       404:
 *         description: Resto room not found
 *       500:
 *         description: Server error occurred
 */
router.put("/Resto/:id", updateResto);

/**
 * @swagger
 * /api/Resto/{id}:
 *   delete:
 *     summary: Delete Resto room by ID
 *     tags: [Resto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Resto room ID
 *     responses:
 *       200:
 *         description: Resto room deleted successfully
 *       404:
 *         description: Resto room not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/Resto/:id", deleteResto);

export default router;
