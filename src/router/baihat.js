import express from "express";
import { addSong, getAllSongs, getSongById } from "../controllers/baihat.js";

const router = express.Router();
router.get('/songs',getAllSongs);
router.post('/songs',addSong);
router.get('/songs/:id',getSongById);


export default router;
