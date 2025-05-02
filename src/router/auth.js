import express from "express";
import {signup} from "../controllers/auth"
const router = express.Router();

router.post("/signup", signup)
router.post("/signin", async (req, res)=>{
    console.log("sign in");
    
})

export default router;