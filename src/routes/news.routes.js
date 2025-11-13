import express from 'express';
import {getAllNews, insertDetailNews, updateNews, getActiveNews, deleteNews, getNewsById} from '../controllers/news.controller.js';
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - nama_berita
 *         - deskripsi
 *         - image
 *       properties:
 *         id:
 *           type: integer
 *           deskripsi: The auto-generated ID of the news.
 *         nama_berita:
 *           type: string
 *           deskripsi: The nama_berita of the news article.
 *         deskripsi:
 *           type: string
 *           deskripsi: A brief deskripsi of the news article.
 *         image:
 *           type: string
 *           deskripsi: The image associated with the news article, encoded in Base64.
 *       example:
 *         id: 12
 *         nama_berita: "test nama_berita"
 *         deskripsi: "This is a test deskripsi for the news article."
 *         image: "Base64 encoded image string"
 */

/**
 * @swagger
 * tags:
 *   name: News
 *   deskripsi: API for managing news articles
 */

/**
 * @swagger
 * /api/getAllNews:
 *   get:
 *     summary: Retrieve a list of all news articles
 *     tags: [News]
 *     responses:
 *       200:
 *         deskripsi: A list of news articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 *       500:
 *         deskripsi: Server error
 */
router.get('/getAllNews', getAllNews);

/**
 * @swagger
 * /api/getActiveNews:
 *   get:
 *     summary: Retrieve a list of active news articles
 *     tags: [News]
 *     responses:
 *       200:
 *         deskripsi: A list of news articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 *       500:
 *         deskripsi: Server error
 */
router.get('/getActiveNews', getActiveNews);

/**
 * @openapi
 * /api/getNewsById/{id}:
 *   get:
 *     summary: Get a news article by ID
 *     deskripsi: Retrieve a single news article by its unique ID.
 *     tags:
 *       - News
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         deskripsi: The ID of the news article to retrieve.
 *         schema:
 *           type: string
 *           example: '1a2b3c4d'
 *     responses:
 *       '200':
 *         deskripsi: Successfully retrieved the news article.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   deskripsi: The news article ID.
 *                   example: '1a2b3c4d'
 *                 nama_berita:
 *                   type: string
 *                   deskripsi: The nama_berita of the news article.
 *                   example: 'Important Announcement'
 *                 content:
 *                   type: string
 *                   deskripsi: The full content of the news article.
 *                   example: 'Here is the full content of the news...'
 *       '400':
 *         deskripsi: Invalid ID supplied.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Invalid ID format.'
 *       '404':
 *         deskripsi: News article not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'News article with id 1a2b3c4d not found.'
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
 *               nama_berita:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               image:
 *                 type: string
 *             required:
 *               - nama_berita
 *               - deskripsi
 *               - image
 *     responses:
 *       201:
 *         deskripsi: News created successfully.
 *       500:
 *         deskripsi: Server error
 */
router.post('/insertDetailNews', insertDetailNews);

/**
 * @swagger
 * /api/updateNews/{id}:
 *   put:
 *     summary: Update an existing news article
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         deskripsi: The ID of the news article to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_berita:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         deskripsi: News updated successfully.
 *       404:
 *         deskripsi: News not found or no changes made.
 *       500:
 *         deskripsi: Internal server error.
 */
router.put('/updateNews/:id', updateNews);

/**
 * @swagger
 * /api/deleteNews/{id}:
 *   delete:
 *     summary: Delete a news article
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         deskripsi: The ID of the news article to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         deskripsi: News deleted successfully.
 *       500:
 *         deskripsi: Internal server error.
 */
router.delete('/deleteNews/:id', deleteNews);

export default router;