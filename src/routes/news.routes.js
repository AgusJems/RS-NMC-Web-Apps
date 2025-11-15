import express from 'express';
import {
  getAllNews,
  getActiveNews,
  getNewsById,
  insertDetailNews,
  updateNews,
  deleteNews,
  getJenisBerita
} from '../controllers/news.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: News
 *   description: API for managing news articles
 */

/* =============================
   SCHEMA DEFINITIONS
============================= */

/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         jenis_id:
 *           type: integer
 *         nama_berita:
 *           type: string
 *         deskripsi:
 *           type: string
 *         image:
 *           type: string
 *         tanggal:
 *           type: string
 *           format: date
 *       example:
 *         id: 1
 *         jenis_id: 2
 *         nama_berita: "Judul Berita"
 *         deskripsi: "<p>Isi berita</p>"
 *         image: "base64_string"
 *         tanggal: "2025-01-12"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     JenisBerita:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nama:
 *           type: string
 *         kode:
 *           type: string
 *       example:
 *         id: 1
 *         nama: "Informasi"
 *         kode: "INFO"
 */


/* =============================
   ROUTES
============================= */

/**
 * @swagger
 * /api/getAllNews:
 *   get:
 *     summary: Get all news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: List of all news
 *       500:
 *         description: Server error
 */
router.get('/getAllNews', getAllNews);

/**
 * @swagger
 * /api/getActiveNews:
 *   get:
 *     summary: Get active news (status = 1)
 *     tags: [News]
 *     responses:
 *       200:
 *         description: List of active news
 */
router.get('/getActiveNews', getActiveNews);

/**
 * @swagger
 * /api/getJenisBerita:
 *   get:
 *     summary: Get list of Jenis Berita (dropdown)
 *     tags: [News]
 *     responses:
 *       200:
 *         description: List of news categories
 */
router.get('/getJenisBerita', getJenisBerita);

/**
 * @swagger
 * /api/getNewsById/{id}:
 *   get:
 *     summary: Get news by ID
 *     tags: [News]
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
 *         description: Not found
 */
router.get('/getNewsById/:id', getNewsById);

/**
 * @swagger
 * /api/insertDetailNews:
 *   post:
 *     summary: Insert new news
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jenis_id:
 *                 type: integer
 *               nama_berita:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/insertDetailNews', insertDetailNews);

/**
 * @swagger
 * /api/updateNews/{id}:
 *   put:
 *     summary: Update news by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Not found
 */
router.put('/updateNews/:id', updateNews);

/**
 * @swagger
 * /api/deleteNews/{id}:
 *   delete:
 *     summary: Delete news by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/deleteNews/:id', deleteNews);

export default router;
