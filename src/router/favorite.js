import express from "express";
import {addFavorite, getAllFavoriteFromUser, removeFavorite} from "../controllers/favorite.js";

const router = express.Router();
router.post('/favorites',addFavorite);
router.get('/favorites',getAllFavoriteFromUser);
router.delete('/favorites',removeFavorite);

export default router;
