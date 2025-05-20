import express from "express";
import {addFavorite, getAllFavoriteFromUser, removeFavorite} from "../controllers/favorite";

const router = express.Router();
router.post('/favorites',addFavorite);
router.get('/favorites',getAllFavoriteFromUser);
router.delete('/favorites',removeFavorite);

export default router;
