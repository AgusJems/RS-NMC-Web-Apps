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
 *     parameters:
 *       - in: path
 *         name: dokter_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dokter
 *     responses:
 *       200:
 *         description: Berhasil ambil data pendidikan
 */
router.get("/getEducationByDokterId/:dokter_id", getEducationByDokterId);

/**
 * @swagger
 * /api/insertEducation:
 *   post:
 *     summary: Tambah riwayat pendidikan
 *     tags: [Education]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               dokter_id: "123"
 *               tingkat_pendidikan: "S1 Kedokteran"
 *               institusi: "Universitas Indonesia"
 *               tahun_lulus: "2019"
 *     responses:
 *       200:
 *         description: Berhasil menambah pendidikan
 */
router.post("/insertEducation", insertEducation);

/**
 * @swagger
 * /api/updateEducation/{id}:
 *   put:
 *     summary: Update riwayat pendidikan
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Update berhasil
 */
router.put("/updateEducation/:id", updateEducation);

/**
 * @swagger
 * /api/deleteEducation/{id}:
 *   delete:
 *     summary: Hapus riwayat pendidikan
 *     tags: [Education]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hapus berhasil
 */
router.delete("/deleteEducation/:id", deleteEducation);

export default router;
