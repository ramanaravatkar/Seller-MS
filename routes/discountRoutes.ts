import express from 'express';
import { addDiscount, updateDiscount } from '../controllers/discoutnController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/:productId', authenticate, addDiscount);
router.put('/:productId', authenticate, updateDiscount);

export default router;
