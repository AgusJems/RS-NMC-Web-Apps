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
 *   description: API Riwayat Pendidikan Dokter
 */

/**
 * @swagger
 * /api/getEducationByDokterId/{dokter_id}:
 *   get:
 *     summary: Ambil daftar pendidikan dokter
 *     tags: [Education]
 */
router.get("/getEducationByDokterId/:dokter_id", getEducationByDokterId);

/**
 * @swagger
 * /api/insertEducation:
 *   post:
 *     summary: Tambah riwayat pendidikan
 *     tags: [Education]
 */
router.post("/insertEducation", insertEducation);

/**
 * @swagger
 * /api/updateEducation/{id}:
 *   put:
 *     summary: Update riwayat pendidikan
 *     tags: [Education]
 */
router.put("/updateEducation/:id", updateEducation);

/**
 * @swagger
 * /api/deleteEducation/{id}:
 *   delete:
 *     summary: Hapus riwayat pendidikan
 *     tags: [Education]
 */
router.delete("/deleteEducation/:id", deleteEducation);

export default router;
