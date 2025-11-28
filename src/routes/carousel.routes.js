import express from "express";
import {
  getAllCarousel,
  getActiveCarousel,
  getCarouselById,
  insertCarousel,
  updateCarousel,
  deleteCarousel,
} from "../controllers/carousel.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Carousel
 *   description: API for managing carousel data
 */

/* =============================
   SCHEMA DEFINITIONS
============================= */

/**
 * @swagger
 * components:
 *   schemas:
 *     Carousel:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nama_carousel:
 *           type: string
 *         deskripsi:
 *           type: string
 *         image:
 *           type: string
 *         status:
 *           type: integer
 *       example:
 *         id: 1
 *         nama_carousel: "Carousel Umum"
 *         deskripsi: "<p>Pelayanan kesehatan umum</p>"
 *         image: "base64_string"
 *         status: 1
 */

/* =============================
   ROUTES
============================= */

/**
 * @swagger
 * /api/getAllCarousel:
 *   get:
 *     summary: Get all carousel
 *     tags: [Carousel]
 *     responses:
 *       200:
 *         description: List of all carousel
 *       500:
 *         description: Server error
 */
router.get("/getAllCarousel", getAllCarousel);

/**
 * @swagger
 * /api/getActiveCarousel:
 *   get:
 *     summary: Get active carousel (status = 1)
 *     tags: [Carousel]
 *     responses:
 *       200:
 *         description: List of active carousel
 */
router.get("/getActiveCarousel", getActiveCarousel);

/**
 * @swagger
 * /api/getCarouselById/{id}:
 *   get:
 *     summary: Get carousel by ID
 *     tags: [Carousel]
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
 *         description: Carousel not found
 */
router.get("/getCarouselById/:id", getCarouselById);

/**
 * @swagger
 * /api/insertCarousel:
 *   post:
 *     summary: Insert a new carousel
 *     tags: [Carousel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_carousel:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Carousel created successfully
 */
router.post("/insertCarousel", insertCarousel);

/**
 * @swagger
 * /api/updateCarousel/{id}:
 *   put:
 *     summary: Update carousel by ID
 *     tags: [Carousel]
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
 *             $ref: '#/components/schemas/Carousel'
 *     responses:
 *       200:
 *         description: Carousel updated successfully
 *       404:
 *         description: Carousel not found
 */
router.put("/updateCarousel/:id", updateCarousel);

/**
 * @swagger
 * /api/deleteCarousel/{id}:
 *   delete:
 *     summary: Delete carousel by ID
 *     tags: [Carousel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Carousel deleted successfully
 */
router.delete("/deleteCarousel/:id", deleteCarousel);

export default router;
