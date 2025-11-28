import express from "express";
import {
  getScheduleByDokterId,
  getAllHari,
  insertSchedule,
  updateSchedule,
  deleteSchedule,
} from "../controllers/schedule.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Schedule
 *   description: Doctor Practice Schedule API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Schedule:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         dokter_id:
 *           type: integer
 *         hari_id:
 *           type: integer
 *         jam_mulai:
 *           type: string
 *           format: time
 *         jam_selesai:
 *           type: string
 *           format: time
 *       example:
 *         id: 1
 *         dokter_id: 5
 *         hari_id: 2
 *         jam_mulai: "08:00"
 *         jam_selesai: "12:00"
 */

/**
 * @swagger
 * /api/getScheduleByDokterId/{dokter_id}:
 *   get:
 *     summary: Retrieve practice schedule by doctor ID
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: dokter_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Successfully retrieved doctor practice schedule
 *       500:
 *         description: Server error occurred
 */
router.get("/getScheduleByDokterId/:dokter_id", getScheduleByDokterId);

/**
 * @swagger
 * /api/getAllHari:
 *   get:
 *     summary: Retrieve all day references
 *     tags: [Schedule]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of days
 *       500:
 *         description: Server error occurred
 */
router.get("/getAllHari", getAllHari);

/**
 * @swagger
 * /api/insertSchedule:
 *   post:
 *     summary: Add a new doctor practice schedule
 *     tags: [Schedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dokter_id:
 *                 type: integer
 *               hari_id:
 *                 type: integer
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *             example:
 *               dokter_id: 5
 *               hari_id: 2
 *               jam_mulai: "08:00"
 *               jam_selesai: "12:00"
 *     responses:
 *       201:
 *         description: Schedule successfully created
 *       500:
 *         description: Server error occurred
 */
router.post("/insertSchedule", insertSchedule);

/**
 * @swagger
 * /api/updateSchedule/{id}:
 *   put:
 *     summary: Update an existing doctor practice schedule
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Schedule ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hari_id:
 *                 type: integer
 *               jam_mulai:
 *                 type: string
 *               jam_selesai:
 *                 type: string
 *             example:
 *               hari_id: 3
 *               jam_mulai: "09:00"
 *               jam_selesai: "13:00"
 *     responses:
 *       200:
 *         description: Schedule successfully updated
 *       404:
 *         description: Schedule not found
 *       500:
 *         description: Server error occurred
 */
router.put("/updateSchedule/:id", updateSchedule);

/**
 * @swagger
 * /api/deleteSchedule/{id}:
 *   delete:
 *     summary: Delete a doctor practice schedule
 *     tags: [Schedule]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Schedule ID
 *     responses:
 *       200:
 *         description: Schedule successfully deleted
 *       500:
 *         description: Server error occurred
 */
router.delete("/deleteSchedule/:id", deleteSchedule);

export default router;
