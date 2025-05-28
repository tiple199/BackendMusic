import express from "express";
import { addSong, getAllSongs, getRandomSong, getSongById } from "../controllers/baihat.js";

const router = express.Router();
router.get('/songs',getAllSongs);
router.post('/songs',addSong);
router.get('/songs/:id',getSongById);
router.get('/song/random',getRandomSong);


export default router;
