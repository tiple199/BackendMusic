import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { connectDB } from "./config/db.js";

import authRouter from "./router/auth.js";
import baihatRouter from "./router/baihat.js";
import albumRouter from "./router/album.js";
import chudeRouter from "./router/chude.js";
import theloaiRouter from "./router/theloai.js";
import playlistRouter from "./router/playlist.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Kết nối MongoDB
connectDB(process.env.DB_URL);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // cho form-urlencoded

// Static file
app.use('/images', express.static(path.join(__dirname, '../image')));
app.use('/file', express.static(path.join(__dirname, '../filemp3')));

// Routes
app.use('/api', authRouter);
app.use('/api', baihatRouter);
app.use('/api', albumRouter);
app.use('/api', chudeRouter);
app.use('/api', theloaiRouter);
app.use('/api', playlistRouter);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
