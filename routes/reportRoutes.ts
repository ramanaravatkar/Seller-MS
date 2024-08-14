import express from 'express';
import { getSalesReport } from '../controllers/reportController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authenticate, getSalesReport);

export default router;
