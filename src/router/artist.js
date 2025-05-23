import express from "express";
import { addArtist, getAllArtists, getArtistById } from "../controllers/artist.js";

const router = express.Router();

router.get('/artists', getAllArtists);
router.post('/artists', addArtist);
router.get('/artists/:id', getArtistById);

export default router;
