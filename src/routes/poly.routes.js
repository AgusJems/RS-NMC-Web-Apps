import express from "express";
import {
  getAllPoli,
  getActivePoli,
  getPoliById,
  insertPoli,
  updatePoli,
  deletePoli,
} from "../controllers/poly.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Poli
 *   description: API for managing poli data
 */

/* =============================
   SCHEMA DEFINITIONS
============================= */

/**
 * @swagger
 * components:
 *   schemas:
 *     Poli:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nama_poli:
 *           type: string
 *         deskripsi:
 *           type: string
 *         image:
 *           type: string
 *         status:
 *           type: integer
 *       example:
 *         id: 1
 *         nama_poli: "Poli Umum"
 *         deskripsi: "<p>Pelayanan kesehatan umum</p>"
 *         image: "base64_string"
 *         status: 1
 */

/* =============================
   ROUTES
============================= */

/**
 * @swagger
 * /api/getAllPoli:
 *   get:
 *     summary: Get all poli
 *     tags: [Poli]
 *     responses:
 *       200:
 *         description: List of all poli
 *       500:
 *         description: Server error
 */
router.get("/getAllPoli", getAllPoli);

/**
 * @swagger
 * /api/getActivePoli:
 *   get:
 *     summary: Get active poli (status = 1)
 *     tags: [Poli]
 *     responses:
 *       200:
 *         description: List of active poli
 */
router.get("/getActivePoli", getActivePoli);

/**
 * @swagger
 * /api/getPoliById/{id}:
 *   get:
 *     summary: Get poli by ID
 *     tags: [Poli]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Poli not found
 */
router.get("/getPoliById/:id", getPoliById);

/**
 * @swagger
 * /api/insertPoli:
 *   post:
 *     summary: Insert a new poli
 *     tags: [Poli]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_poli:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Poli created successfully
 */
router.post("/insertPoli", insertPoli);

/**
 * @swagger
 * /api/updatePoli/{id}:
 *   put:
 *     summary: Update poli by ID
 *     tags: [Poli]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Poli'
 *     responses:
 *       200:
 *         description: Poli updated successfully
 *       404:
 *         description: Poli not found
 */
router.put("/updatePoli/:id", updatePoli);

/**
 * @swagger
 * /api/deletePoli/{id}:
 *   delete:
 *     summary: Delete poli by ID
 *     tags: [Poli]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Poli deleted successfully
 */
router.delete("/deletePoli/:id", deletePoli);

export default router;
