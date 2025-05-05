import express from "express";
import productRouter from "./router/product";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";
import authRouter from "./router/auth"
import baihatRouter from "./router/baihat"
import albumRouter from "./router/album"
import chudeRouter from "./router/chude"
import theloaiRouter from "./router/theloai"
import playlistRouter from "./router/playlist"
import path from "path"

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



dotenv.config();
const app = express();
// middleware
app.use(express.json());
// app.use(morgan("dev"));
// connect db
connectDB(process.env.DB_URL);


// router
app.use('/images/albums', express.static(path.join(__dirname, '../image/albums')));
app.use('/images/songs', express.static(path.join(__dirname, '../image/baiHat')));
app.use('/images/topics', express.static(path.join(__dirname, '../image/chuDe')));
app.use('/images/playlists', express.static(path.join(__dirname, '../image/playlist')));
app.use('/file', express.static(path.join(__dirname, '../filemp3')));
app.use('/api',authRouter);
app.use('/api',albumRouter);
app.use('/api',chudeRouter);
app.use('/api',theloaiRouter);
app.use('/api',playlistRouter);
app.use('/api',baihatRouter);

export const viteNodeApp = app;