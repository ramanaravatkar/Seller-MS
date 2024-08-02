import express from 'express';
import {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    addDiscount,
    getAnalytics,
    getSalesReport
} from '../controllers/productController';

const router = express.Router();

router.post('/products', addProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// New functionalities
router.put('/products/:id/discount', addDiscount);
router.get('/products/:id/analytics', getAnalytics);
router.get('/sales-report/:sellerId', getSalesReport);

export default router;
