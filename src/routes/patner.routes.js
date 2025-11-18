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
 * /api/patner:
 *   get:
 *     summary: Get all partner
 *     tags: [Patner]
 */
router.get("/patner", getAllPatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   get:
 *     summary: Get partner by ID
 *     tags: [Patner]
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
 */
router.post("/patner", insertPatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   put:
 *     summary: Update partner
 *     tags: [Patner]
 */
router.put("/patner/:id", updatePatner);

/**
 * @swagger
 * /api/patner/{id}:
 *   delete:
 *     summary: Delete partner
 *     tags: [Patner]
 */
router.delete("/patner/:id", deletePatner);

export default router;
