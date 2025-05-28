import express from "express";
import { addPlaylist, getAllPlaylists, getPlaylistById, updatePlaylistName, deletePlaylist } from "../controllers/playlist.js";

const router = express.Router();
router.get('/playlist',getAllPlaylists);
router.post('/playlist',addPlaylist);
router.get('/playlist/:id',getPlaylistById);
router.put("/playlists/:id", updatePlaylistName);
router.delete("/playlists/:id", deletePlaylist);

export default router;