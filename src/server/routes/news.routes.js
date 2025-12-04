import express from 'express';
import {
  getAllNews,
  getTotalNews,
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
 *         nama_berita: "Health Awareness Campaign"
 *         deskripsi: "<p>Detailed description of the news article</p>"
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
 *         nama: "Information"
 *         kode: "INFO"
 */


/* =============================
   ROUTES
============================= */

/**
 * @swagger
 * /api/getAllNews:
 *   get:
 *     summary: Retrieve all news articles
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of all news articles
 *       500:
 *         description: Server error occurred
 */
router.get('/getAllNews', getAllNews);

/**
 * @swagger
 * /api/getTotalNews:
 *   get:
 *     summary: Retrieve total count of news articles
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Successfully retrieved total count
 *       500:
 *         description: Server error occurred
 */
router.get('/getTotalNews', getTotalNews);

/**
 * @swagger
 * /api/getActiveNews:
 *   get:
 *     summary: Retrieve active news (status = 1)
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of active news
 *       500:
 *         description: Server error occurred
 */
router.get('/getActiveNews', getActiveNews);

/**
 * @swagger
 * /api/getJenisBerita:
 *   get:
 *     summary: Retrieve list of news categories (Jenis Berita)
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Successfully retrieved news categories
 *       500:
 *         description: Server error occurred
 */
router.get('/getJenisBerita', getJenisBerita);

/**
 * @swagger
 * /api/getNewsById/{id}:
 *   get:
 *     summary: Retrieve a news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: News article ID
 *     responses:
 *       200:
 *         description: Successfully retrieved news article
 *       404:
 *         description: News article not found
 *       500:
 *         description: Server error occurred
 */
router.get('/getNewsById/:id', getNewsById);

/**
 * @swagger
 * /api/insertDetailNews:
 *   post:
 *     summary: Create a new news article
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
 *             example:
 *               jenis_id: 1
 *               nama_berita: "New Hospital Update"
 *               deskripsi: "<p>Latest update from the hospital</p>"
 *               image: "base64_string"
 *     responses:
 *       201:
 *         description: News article created successfully
 *       500:
 *         description: Server error occurred
 */
router.post('/insertDetailNews', insertDetailNews);

/**
 * @swagger
 * /api/updateNews/{id}:
 *   put:
 *     summary: Update news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: News article ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: News article updated successfully
 *       404:
 *         description: News article not found
 *       500:
 *         description: Server error occurred
 */
router.put('/updateNews/:id', updateNews);

/**
 * @swagger
 * /api/deleteNews/{id}:
 *   delete:
 *     summary: Delete news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: News article ID
 *     responses:
 *       200:
 *         description: News article deleted successfully
 *       404:
 *         description: News article not found
 *       500:
 *         description: Server error occurred
 */
router.delete('/deleteNews/:id', deleteNews);

export default router;
