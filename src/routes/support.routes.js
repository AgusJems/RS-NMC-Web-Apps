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
 *         nama: "Support Facility"
 *         deskripsi: "<p>Example of hospital support facility</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Support
 *   description: API for managing hospital support facilities
 */

/**
 * @swagger
 * /api/support:
 *   get:
 *     summary: Retrieve all support facility records
 *     tags: [Support]
 *     responses:
 *       200:
 *         description: Successfully retrieved all support facility data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Support'
 *       500:
 *         description: Server error occurred
 */
router.get("/support", getAllSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   get:
 *     summary: Retrieve support facility by ID
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Support facility ID
 *     responses:
 *       200:
 *         description: Support facility data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Support'
 *       404:
 *         description: Support facility not found
 *       500:
 *         description: Server error occurred
 */
router.get("/support/:id", getSupportById);

/**
 * @swagger
 * /api/support:
 *   post:
 *     summary: Create a new support facility
 *     tags: [Support]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Support'
 *     responses:
 *       201:
 *         description: Support facility created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/support", insertSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   put:
 *     summary: Update support facility by ID
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Support facility ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Support'
 *     responses:
 *       200:
 *         description: Support facility updated successfully
 *       404:
 *         description: Support facility not found
 *       500:
 *         description: Server error occurred
 */
router.put("/support/:id", updateSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   delete:
 *     summary: Delete support facility by ID
 *     tags: [Support]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Support facility ID
 *     responses:
 *       200:
 *         description: Support facility deleted successfully
 *       404:
 *         description: Support facility not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/support/:id", deleteSupport);

export default router;
