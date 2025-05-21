import express from "express";
import { addPlaylist, getAllPlaylists, getPlaylistById } from "../controllers/playlist.js";

const router = express.Router();
router.get('/songs',getAllPlaylists);
router.post('/songs',addPlaylist);
router.get('/songs/:id',getPlaylistById);


export default router;