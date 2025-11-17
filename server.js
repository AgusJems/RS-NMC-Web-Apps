// server.js
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import pool from './config/db.js';
import newsRoutes from './src/routes/news.routes.js';
import poliRoutes from './src/routes/poly.routes.js';
import dokterRoutes from './src/routes/doctor.routes.js';
import educationRoutes from './src/routes/education.routes.js';
import scheduleRoutes from './src/routes/schedule.routes.js';

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


app.use('/api', newsRoutes);
app.use("/api", poliRoutes);
app.use('/api', dokterRoutes);
app.use('/api', educationRoutes);
app.use('/api', scheduleRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(port, () => {
  console.log(`Express backend listening at http://localhost:${port}`);
});

// Handle graceful shutdown and close the connection pool
process.on('SIGINT', async () => {
  console.log('Received SIGINT. Closing database pool.');
  try {
    await pool.end(); // Close the connection pool
    console.log('MySQL database pool closed.');
    process.exit(0);
  } catch (err) {
    console.error('Error closing database pool:', err);
    process.exit(1);
  }
});