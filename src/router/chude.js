import express from "express";
import { addChude, getAllChudes, getChudeById } from "../controllers/chude.js";

const router = express.Router();
router.get('/albums',getAllChudes);
router.post('/albums',addChude);
router.get('/albums/:id',getChudeById);


export default router;
