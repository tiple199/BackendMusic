import express from "express";
import { addTheloai, getAllTheloais, getTheloaiById } from "../controllers/theloai.js";

const router = express.Router();
router.get('/theloai',getAllTheloais);
router.post('/theloai',addTheloai);
router.get('/theloai/:id',getTheloaiById);


export default router;