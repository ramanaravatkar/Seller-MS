import express from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createProduct);
router.get('/', authenticate, getProducts);
router.get('/:id', authenticate, getProduct);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

export default router;
