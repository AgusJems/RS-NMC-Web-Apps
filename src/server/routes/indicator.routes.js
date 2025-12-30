import express from "express";
import {
  getAllIndicator,
  getIndicatorById,
  insertIndicator,
  updateIndicator,
  deleteIndicator,
} from "../controllers/indicator.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Indicator:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         image:
 *           type: string
 *         title:
 *           type: string
 *         status:
 *           type: integer
 *       example:
 *         id: 1
 *         image: "data:image/png;base64,xxxxx"
 *         title: "Indicator Facility"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Indicator
 *   description: API for managing hospital indicator facilities
 */

/**
 * @swagger
 * /api/indicator:
 *   get:
 *     summary: Retrieve all indicator facility records
 *     tags: [Indicator]
 *     responses:
 *       200:
 *         description: Successfully retrieved all indicator facility data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Indicator'
 *       500:
 *         description: Server error occurred
 */
router.get("/indicator", getAllIndicator);

/**
 * @swagger
 * /api/indicator/{id}:
 *   get:
 *     summary: Retrieve indicator facility by ID
 *     tags: [Indicator]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Indicator facility ID
 *     responses:
 *       200:
 *         description: Indicator facility data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Indicator'
 *       404:
 *         description: Indicator facility not found
 *       500:
 *         description: Server error occurred
 */
router.get("/indicator/:id", getIndicatorById);

/**
 * @swagger
 * /api/indicator:
 *   post:
 *     summary: Create a new indicator facility
 *     tags: [Indicator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Indicator'
 *     responses:
 *       201:
 *         description: Indicator facility created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/indicator", insertIndicator);

/**
 * @swagger
 * /api/indicator/{id}:
 *   put:
 *     summary: Update indicator facility by ID
 *     tags: [Indicator]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Indicator facility ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Indicator'
 *     responses:
 *       200:
 *         description: Indicator facility updated successfully
 *       404:
 *         description: Indicator facility not found
 *       500:
 *         description: Server error occurred
 */
router.put("/indicator/:id", updateIndicator);

/**
 * @swagger
 * /api/indicator/{id}:
 *   delete:
 *     summary: Delete indicator facility by ID
 *     tags: [Indicator]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Indicator facility ID
 *     responses:
 *       200:
 *         description: Indicator facility deleted successfully
 *       404:
 *         description: Indicator facility not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/indicator/:id", deleteIndicator);

export default router;
