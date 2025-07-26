// routes/geminiRoute.js
import express from 'express';
import { geminiGenrate } from './geminiController.js';
const router = express.Router();

router.post('/generate', geminiGenrate);

export default router;
