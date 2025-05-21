import express from "express";
import { addChude, getAllChudes, getChudeById } from "../controllers/chude.js";

const router = express.Router();
router.get('/chude',getAllChudes);
router.post('/chude',addChude);
router.get('/chude/:id',getChudeById);


export default router;
