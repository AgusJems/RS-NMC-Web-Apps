import express from "express";
import {
  getAllDokter,
  getDokterById,
  getDokterByPoliId,
  insertDokter,
  updateDokter,
  deleteDokter,
} from "../controllers/doctor.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Doctor
 *   description: API for managing doctor data
 */

/* =============================
   SCHEMA DEFINITIONS
============================= */

/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nama:
 *           type: string
 *         spesialis:
 *           type: string
 *         profile:
 *           type: string
 *         image:
 *           type: string
 *         poli_id:
 *           type: integer
 *       example:
 *         id: 1
 *         nama: "Dr. Andi Pratama"
 *         spesialis: "Internal Medicine Specialist"
 *         profile: "<p>A doctor with 10 years of experience</p>"
 *         image: "base64-image-string"
 *         poli_id: 3
 */

/* =============================
   ROUTES
============================= */

/**
 * @swagger
 * /api/getAllDokter:
 *   get:
 *     summary: Retrieve all doctors
 *     tags: [Doctor]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of all doctors
 *       500:
 *         description: Server error occurred
 */
router.get("/getAllDokter", getAllDokter);

/**
 * @swagger
 * /api/getDokterByPoliId/{poli_id}:
 *   get:
 *     summary: Retrieve doctors by clinic (poli) ID
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: poli_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Clinic (Poli) ID
 *     responses:
 *       200:
 *         description: Successfully retrieved doctors under the specified clinic
 *       500:
 *         description: Server error occurred
 */
router.get("/getDokterByPoliId/:poli_id", getDokterByPoliId);

/**
 * @swagger
 * /api/getDokterById/{id}:
 *   get:
 *     summary: Retrieve doctor details by ID
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Successfully retrieved doctor details
 *       404:
 *         description: Doctor not found
 */
router.get("/getDokterById/:id", getDokterById);

/**
 * @swagger
 * /api/insertDokter:
 *   post:
 *     summary: Add a new doctor
 *     tags: [Doctor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               spesialis:
 *                 type: string
 *               profile:
 *                 type: string
 *               image:
 *                 type: string
 *               poli_id:
 *                 type: integer
 *             example:
 *               nama: "Dr. Budi Santoso"
 *               spesialis: "Cardiologist"
 *               profile: "<p>Experienced heart specialist</p>"
 *               image: "base64-image"
 *               poli_id: 4
 *     responses:
 *       201:
 *         description: Doctor successfully created
 *       500:
 *         description: Server error occurred
 */
router.post("/insertDokter", insertDokter);

/**
 * @swagger
 * /api/updateDokter/{id}:
 *   put:
 *     summary: Update doctor information
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Doctor ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               nama: "Dr. Andi Pratama"
 *               spesialis: "Internal Medicine Specialist"
 *               profile: "<p>Updated doctor profile info</p>"
 *               image: "base64-image"
 *               poli_id: 3
 *     responses:
 *       200:
 *         description: Doctor successfully updated
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Server error occurred
 */
router.put("/updateDokter/:id", updateDokter);

/**
 * @swagger
 * /api/deleteDokter/{id}:
 *   delete:
 *     summary: Delete doctor by ID
 *     tags: [Doctor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Doctor successfully deleted
 *       404:
 *         description: Doctor not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/deleteDokter/:id", deleteDokter);

export default router;
