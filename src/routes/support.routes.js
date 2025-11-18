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
 *         nama: "Ruang Mawar"
 *         deskripsi: "<p>Ruang rawat inap kelas I</p>"
 *         status: 1
 */

/**
 * @swagger
 * /api/support:
 *   get:
 *     summary: Get all support
 *     tags: [Support]
 */
router.get("/support", getAllSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   get:
 *     summary: Get support by ID
 *     tags: [Support]
 */
router.get("/support/:id", getSupportById);

/**
 * @swagger
 * /api/support:
 *   post:
 *     summary: Insert support
 *     tags: [Support]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Support'
 */
router.post("/support", insertSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   put:
 *     summary: Update support
 *     tags: [Support]
 */
router.put("/support/:id", updateSupport);

/**
 * @swagger
 * /api/support/{id}:
 *   delete:
 *     summary: Delete support
 *     tags: [Support]
 */
router.delete("/support/:id", deleteSupport);

export default router;
