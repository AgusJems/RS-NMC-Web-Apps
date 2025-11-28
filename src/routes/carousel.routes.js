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
 *   description: API for managing homepage carousel data
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
 *         nama_carousel: "General Carousel"
 *         deskripsi: "<p>General health service information</p>"
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
 *     summary: Retrieve all carousel items
 *     tags: [Carousel]
 *     responses:
 *       200:
 *         description: Successfully retrieved all carousel items
 *       500:
 *         description: Server error occurred
 */
router.get("/getAllCarousel", getAllCarousel);

/**
 * @swagger
 * /api/getActiveCarousel:
 *   get:
 *     summary: Retrieve carousel items with active status (status = 1)
 *     tags: [Carousel]
 *     responses:
 *       200:
 *         description: Successfully retrieved all active carousel items
 *       500:
 *         description: Server error occurred
 */
router.get("/getActiveCarousel", getActiveCarousel);

/**
 * @swagger
 * /api/getCarouselById/{id}:
 *   get:
 *     summary: Retrieve carousel item by ID
 *     tags: [Carousel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Carousel item ID
 *     responses:
 *       200:
 *         description: Successfully retrieved carousel item
 *       404:
 *         description: Carousel item not found
 *       500:
 *         description: Server error occurred
 */
router.get("/getCarouselById/:id", getCarouselById);

/**
 * @swagger
 * /api/insertCarousel:
 *   post:
 *     summary: Create a new carousel item
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
 *             example:
 *               nama_carousel: "Health Promotion Banner"
 *               deskripsi: "<p>Information about current health promotion</p>"
 *               image: "base64_string"
 *     responses:
 *       201:
 *         description: Carousel item created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/insertCarousel", insertCarousel);

/**
 * @swagger
 * /api/updateCarousel/{id}:
 *   put:
 *     summary: Update carousel item by ID
 *     tags: [Carousel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Carousel item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Carousel'
 *     responses:
 *       200:
 *         description: Carousel item updated successfully
 *       404:
 *         description: Carousel item not found
 *       500:
 *         description: Server error occurred
 */
router.put("/updateCarousel/:id", updateCarousel);

/**
 * @swagger
 * /api/deleteCarousel/{id}:
 *   delete:
 *     summary: Delete carousel item by ID
 *     tags: [Carousel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Carousel item ID
 *     responses:
 *       200:
 *         description: Carousel item deleted successfully
 *       404:
 *         description: Carousel item not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/deleteCarousel/:id", deleteCarousel);

export default router;
