import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  recordSale,
  getSalesReport,
} from '../controllers/productController';

const router = Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

router.post('/sales', recordSale);
router.get('/sales/report', getSalesReport);

export default router;
