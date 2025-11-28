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
 *         deskripsi: "Pelayanan bagus"
 *         rating: 5
 *         status: 1
 */

/* ===========================================
   ROUTES
=========================================== */

/**
 * @swagger
 * /api/getAllTestimoni:
 *   get:
 *     summary: Get all testimonials
 *     tags: [Testimoni]
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua testimoni
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Testimoni'
 */
router.get("/getAllTestimoni", getAllTestimoni);

/**
 * @swagger
 * /api/getTestimoniById/{id}:
 *   get:
 *     summary: Get testimonial by ID
 *     tags: [Testimoni]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID testimoni
 *     responses:
 *       200:
 *         description: Berhasil mengambil testimoni
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Testimoni'
 *       404:
 *         description: Testimoni tidak ditemukan
 */
router.get("/getTestimoniById/:id", getTestimoniById);

/**
 * @swagger
 * /api/insertTestimoni:
 *   post:
 *     summary: Insert testimonial
 *     tags: [Testimoni]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimoni'
 *     responses:
 *       200:
 *         description: Testimoni berhasil ditambahkan
 */
router.post("/insertTestimoni", insertTestimoni);

/**
 * @swagger
 * /api/updateTestimoni/{id}:
 *   put:
 *     summary: Update testimonial
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
 *         description: Testimoni berhasil diperbarui
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
 *         description: Status testimoni berhasil diperbarui
 */
router.patch("/updateStatusTestimoni/:id", updateStatusTestimoni);

/**
 * @swagger
 * /api/deleteTestimoni/{id}:
 *   delete:
 *     summary: Delete testimonial
 *     tags: [Testimoni]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Testimoni berhasil dihapus
 */
router.delete("/deleteTestimoni/:id", deleteTestimoni);

export default router;
