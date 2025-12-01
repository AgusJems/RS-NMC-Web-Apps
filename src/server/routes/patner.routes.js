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
 *   description: API for managing hospital partners
 */

/**
 * @swagger
 * /api/patner:
 *   get:
 *     summary: Retrieve all partners
 *     tags: [Patner]
 *     responses:
 *       200:
 *         description: Successfully retrieved all partners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patner'
 *       500:
 *         description: Server error occurred
 */
router.get("/patner", getAllPatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   get:
 *     summary: Retrieve partner by ID
 *     tags: [Patner]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID
 *     responses:
 *       200:
 *         description: Partner data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patner'
 *       404:
 *         description: Partner not found
 *       500:
 *         description: Server error occurred
 */
router.get("/patner/:id", getPatnerById);

/**
 * @swagger
 * /api/patner:
 *   post:
 *     summary: Create a new partner
 *     tags: [Patner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patner'
 *     responses:
 *       201:
 *         description: Partner created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/patner", insertPatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   put:
 *     summary: Update partner by ID
 *     tags: [Patner]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patner'
 *     responses:
 *       200:
 *         description: Partner updated successfully
 *       404:
 *         description: Partner not found
 *       500:
 *         description: Server error occurred
 */
router.put("/patner/:id", updatePatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   delete:
 *     summary: Delete partner by ID
 *     tags: [Patner]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Partner ID
 *     responses:
 *       200:
 *         description: Partner deleted successfully
 *       404:
 *         description: Partner not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/patner/:id", deletePatner);

export default router;
