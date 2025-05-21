import express from "express";
import { addPlaylist, getAllPlaylists, getPlaylistById } from "../controllers/playlist.js";

const router = express.Router();
router.get('/playlist',getAllPlaylists);
router.post('/playlist',addPlaylist);
router.get('/playlist/:id',getPlaylistById);


export default router;