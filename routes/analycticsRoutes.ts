import express from 'express';
import { getProductAnalytics } from '../controllers/analyticsController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:productId', authenticate, getProductAnalytics);

export default router;
