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
 *   description: API for managing clinic (Poli) data
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
 *         nama_poli: "General Clinic"
 *         deskripsi: "<p>General outpatient medical services</p>"
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
 *     summary: Retrieve all clinics (Poli)
 *     tags: [Poli]
 *     responses:
 *       200:
 *         description: Successfully retrieved all clinic data
 *       500:
 *         description: Server error occurred
 */
router.get("/getAllPoli", getAllPoli);

/**
 * @swagger
 * /api/getActivePoli:
 *   get:
 *     summary: Retrieve active clinics (status = 1)
 *     tags: [Poli]
 *     responses:
 *       200:
 *         description: Successfully retrieved active clinics
 *       500:
 *         description: Server error occurred
 */
router.get("/getActivePoli", getActivePoli);

/**
 * @swagger
 * /api/getPoliById/{id}:
 *   get:
 *     summary: Retrieve clinic (Poli) by ID
 *     tags: [Poli]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Clinic ID
 *     responses:
 *       200:
 *         description: Clinic data retrieved successfully
 *       404:
 *         description: Clinic not found
 *       500:
 *         description: Server error occurred
 */
router.get("/getPoliById/:id", getPoliById);

/**
 * @swagger
 * /api/insertPoli:
 *   post:
 *     summary: Create a new clinic (Poli)
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
 *             example:
 *               nama_poli: "Dental Clinic"
 *               deskripsi: "<p>Dental and oral health services</p>"
 *               image: "base64_string"
 *     responses:
 *       201:
 *         description: Clinic created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/insertPoli", insertPoli);

/**
 * @swagger
 * /api/updatePoli/{id}:
 *   put:
 *     summary: Update clinic (Poli) by ID
 *     tags: [Poli]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Clinic ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Poli'
 *     responses:
 *       200:
 *         description: Clinic updated successfully
 *       404:
 *         description: Clinic not found
 *       500:
 *         description: Server error occurred
 */
router.put("/updatePoli/:id", updatePoli);

/**
 * @swagger
 * /api/deletePoli/{id}:
 *   delete:
 *     summary: Delete clinic (Poli) by ID
 *     tags: [Poli]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Clinic ID
 *     responses:
 *       200:
 *         description: Clinic deleted successfully
 *       404:
 *         description: Clinic not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/deletePoli/:id", deletePoli);

export default router;
