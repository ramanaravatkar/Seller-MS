import express from 'express';
import { createBundle, updateBundle, deleteBundle } from '../controllers/bundleController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createBundle);
router.put('/:id', authenticate, updateBundle);
router.delete('/:id', authenticate, deleteBundle);

export default router;
