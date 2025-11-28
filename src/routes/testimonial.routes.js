import express from "express";
import {
  getAllTestimoni,
  getTestimoniById,
  insertTestimoni,
  updateTestimoni,
  updateStatusTestimoni,
  deleteTestimoni,
} from "../controllers/testimonial.controller.js";

const router = express.Router();

/* ================================
   SWAGGER SCHEMA
================================ */

/**
 * @swagger
 * components:
 *   schemas:
 *     Testimoni:
 *       summary: Testimonial object schema
 *       description: Schema definition for patient testimonials submitted through the system.
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nama:
 *           type: string
 *         alamat:
 *           type: string
 *         deskripsi:
 *           type: string
 *         rating:
 *           type: integer
 *         status:
 *           type: integer
 *       example:
 *         id: 1
 *         nama: "Rizki"
 *         alamat: "Sidoarjo"
 *         deskripsi: "Great service"
 *         rating: 5
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   - name: Testimoni
 *     summary: API for managing patient testimonials
 *     description: Endpoints related to creating, retrieving, updating, and deleting patient testimonial records.
 */

/* ================================
   ROUTES
================================ */

/**
 * @swagger
 * /api/getAllTestimoni:
 *   get:
 *     summary: Retrieve all testimonials
 *     tags: [Testimoni]
 *     responses:
 *       200:
 *         description: Successfully retrieved all testimonials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Testimoni'
 *       500:
 *         description: Server error occurred
 */
router.get("/getAllTestimoni", getAllTestimoni);

/**
 * @swagger
 * /api/getTestimoniById/{id}:
 *   get:
 *     summary: Retrieve a testimonial by ID
 *     tags: [Testimoni]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Testimonial ID
 *     responses:
 *       200:
 *         description: Testimonial retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Testimoni'
 *       404:
 *         description: Testimonial not found
 *       500:
 *         description: Server error occurred
 */
router.get("/getTestimoniById/:id", getTestimoniById);

/**
 * @swagger
 * /api/insertTestimoni:
 *   post:
 *     summary: Create a new testimonial
 *     tags: [Testimoni]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimoni'
 *     responses:
 *       201:
 *         description: Testimonial created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/insertTestimoni", insertTestimoni);

/**
 * @swagger
 * /api/updateTestimoni/{id}:
 *   put:
 *     summary: Update testimonial by ID
 *     tags: [Testimoni]
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
 *             $ref: '#/components/schemas/Testimoni'
 *     responses:
 *       200:
 *         description: Testimonial updated successfully
 *       404:
 *         description: Testimonial not found
 *       500:
 *         description: Server error occurred
 */
router.put("/updateTestimoni/:id", updateTestimoni);

/**
 * @swagger
 * /api/updateStatusTestimoni/{id}:
 *   patch:
 *     summary: Update testimonial status only
 *     tags: [Testimoni]
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
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *             example:
 *               status: 0
 *     responses:
 *       200:
 *         description: Testimonial status updated successfully
 *       404:
 *         description: Testimonial not found
 *       500:
 *         description: Server error occurred
 */
router.patch("/updateStatusTestimoni/:id", updateStatusTestimoni);

/**
 * @swagger
 * /api/deleteTestimoni/{id}:
 *   delete:
 *     summary: Delete testimonial by ID
 *     tags: [Testimoni]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Testimonial deleted successfully
 *       404:
 *         description: Testimonial not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/deleteTestimoni/:id", deleteTestimoni);

export default router;
