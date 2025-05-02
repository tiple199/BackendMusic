import express from "express";
import { addTheloai, getAllTheloais, getTheloaiById } from "../controllers/theloai";

const router = express.Router();
router.get('/songs',getAllTheloais);
router.post('/songs',addTheloai);
router.get('/songs/:id',getTheloaiById);


export default router;