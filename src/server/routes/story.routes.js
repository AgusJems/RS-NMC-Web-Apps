import express from "express";
import {
  getAllStory,
  getStoryById,
  insertStory,
  updateStory,
  deleteStory,
} from "../controllers/story.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Story:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         image:
 *           type: string
 *         title:
 *           type: string
 *         deskripsi:
 *           type: string
 *         status:
 *           type: integer
 *       example:
 *         id: 1
 *         image: "data:image/png;base64,xxxxx"
 *         title: "Story Facility"
 *         deskripsi: "<p>Example of hospital story facility</p>"
 *         status: 1
 */

/**
 * @swagger
 * tags:
 *   name: Story
 *   description: API for managing hospital story facilities
 */

/**
 * @swagger
 * /api/story:
 *   get:
 *     summary: Retrieve all story facility records
 *     tags: [Story]
 *     responses:
 *       200:
 *         description: Successfully retrieved all story facility data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Story'
 *       500:
 *         description: Server error occurred
 */
router.get("/story", getAllStory);

/**
 * @swagger
 * /api/story/{id}:
 *   get:
 *     summary: Retrieve story facility by ID
 *     tags: [Story]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Story facility ID
 *     responses:
 *       200:
 *         description: Story facility data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Story'
 *       404:
 *         description: Story facility not found
 *       500:
 *         description: Server error occurred
 */
router.get("/story/:id", getStoryById);

/**
 * @swagger
 * /api/story:
 *   post:
 *     summary: Create a new story facility
 *     tags: [Story]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Story'
 *     responses:
 *       201:
 *         description: Story facility created successfully
 *       500:
 *         description: Server error occurred
 */
router.post("/story", insertStory);

/**
 * @swagger
 * /api/story/{id}:
 *   put:
 *     summary: Update story facility by ID
 *     tags: [Story]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Story facility ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Story'
 *     responses:
 *       200:
 *         description: Story facility updated successfully
 *       404:
 *         description: Story facility not found
 *       500:
 *         description: Server error occurred
 */
router.put("/story/:id", updateStory);

/**
 * @swagger
 * /api/story/{id}:
 *   delete:
 *     summary: Delete story facility by ID
 *     tags: [Story]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Story facility ID
 *     responses:
 *       200:
 *         description: Story facility deleted successfully
 *       404:
 *         description: Story facility not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/story/:id", deleteStory);

export default router;
