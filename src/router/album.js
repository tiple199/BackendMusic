import express from "express";
import { addAlbum, getAllAlbums, getAlbumById } from "../controllers/album.js";

const router = express.Router();
router.get('/albums',getAllAlbums);
router.post('/albums',addAlbum);
router.get('/albums/:id',getAlbumById);


export default router;
