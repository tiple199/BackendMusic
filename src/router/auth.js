import express from 'express';
import {signin, signup} from '../controllers/auth.js'

const router = express.Router();

router.post('/register', signup);

router.post('/login', signin);

export default router;