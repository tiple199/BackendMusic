import express from "express";
import {addFavorite, getAllFavoriteFromUser, removeFavorite, checkFavorite } from "../controllers/favorite.js";

const router = express.Router();
router.post('/favorites',addFavorite);
router.get('/favorites',getAllFavoriteFromUser);
router.delete('/favorites',removeFavorite);
router.get("/favorites/check", checkFavorite);

export default router;
