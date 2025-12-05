import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import pool from "./config/db.js";

import restoRoutes from "./src/server/routes/resto.routes.js";
import newsRoutes from "./src/server/routes/news.routes.js";
import poliRoutes from "./src/server/routes/poly.routes.js";
import dokterRoutes from "./src/server/routes/doctor.routes.js";
import educationRoutes from "./src/server/routes/education.routes.js";
import scheduleRoutes from "./src/server/routes/schedule.routes.js";
import testimonialRoutes from "./src/server/routes/testimonial.routes.js";
import patnerRoutes from "./src/server/routes/patner.routes.js";
import inpatientRoutes from "./src/server/routes/inpatient.routes.js";
import emergencyRoutes from "./src/server/routes/emergency.routes.js";
import supportRoutes from "./src/server/routes/support.routes.js";
import carouselRoutes from "./src/server/routes/carousel.routes.js";
import authRoutes from "./src/server/routes/auth.routes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api", authRoutes);
app.use("/api", newsRoutes);
app.use("/api", poliRoutes);
app.use("/api", dokterRoutes);
app.use("/api", educationRoutes);
app.use("/api", scheduleRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", patnerRoutes);
app.use("/api", inpatientRoutes);
app.use("/api", emergencyRoutes);
app.use("/api", supportRoutes);
app.use("/api", carouselRoutes);
app.use("/api", restoRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build
app.use(express.static(path.join(__dirname, "dist")));


app.get("/api/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(`Backend running at http://0.0.0.0:${port}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  try {
    await pool.end();
    console.log("Database pool closed.");
    process.exit(0);
  } catch (err) {
    console.error("Error closing DB:", err);
    process.exit(1);
  }
});
