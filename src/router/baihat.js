import express from "express";
import { addSong, getAllSongs, getSongById, getSongsByPlaylistId  } from "../controllers/baihat.js";

const router = express.Router();
router.get('/songs',getAllSongs);
router.post('/songs',addSong);
router.get('/songs/:id',getSongById);
router.get("/playlists/:playlistId/songs", getSongsByPlaylistId);


export default router;
