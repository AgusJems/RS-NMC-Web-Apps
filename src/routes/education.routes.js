import express from "express";
import {
  getEducationByDokterId,
  insertEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/education.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Education
 *   description: Medical Education History API
 */

/**
 * @swagger
 * /api/getEducationByDokterId/{dokter_id}:
 *   get:
 *     summary: Retrieve doctor's education history by doctor ID
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: dokter_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Doctor ID
 *     responses:
 *       200:
 *         description: Successfully retrieved education history
 *       404:
 *         description: No education data found
 *       500:
 *         description: Server error occurred
 */
router.get("/getEducationByDokterId/:dokter_id", getEducationByDokterId);

/**
 * @swagger
 * /api/insertEducation:
 *   post:
 *     summary: Add new medical education record
 *     tags: [Education]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dokter_id:
 *                 type: string
 *               tingkat_pendidikan:
 *                 type: string
 *               institusi:
 *                 type: string
 *               tahun_lulus:
 *                 type: string
 *             example:
 *               dokter_id: "123"
 *               tingkat_pendidikan: "Bachelor of Medicine"
 *               institusi: "University of Indonesia"
 *               tahun_lulus: "2019"
 *     responses:
 *       200:
 *         description: Education record successfully added
 *       500:
 *         description: Server error occurred
 */
router.post("/insertEducation", insertEducation);

/**
 * @swagger
 * /api/updateEducation/{id}:
 *   put:
 *     summary: Update existing education record
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Education record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               tingkat_pendidikan: "Specialist in Internal Medicine"
 *               institusi: "Gadjah Mada University"
 *               tahun_lulus: "2022"
 *     responses:
 *       200:
 *         description: Education record successfully updated
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error occurred
 */
router.put("/updateEducation/:id", updateEducation);

/**
 * @swagger
 * /api/deleteEducation/{id}:
 *   delete:
 *     summary: Delete education record
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Education record ID
 *     responses:
 *       200:
 *         description: Education record successfully deleted
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error occurred
 */
router.delete("/deleteEducation/:id", deleteEducation);

export default router;
