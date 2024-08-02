import express from 'express';
import {
    addBundleProduct,
    getBundleProducts,
    getBundleProductById,
    updateBundleProduct,
    deleteBundleProduct
} from '../controllers/bundleProductController';

const router = express.Router();

router.post('/bundle-products', addBundleProduct);
router.get('/bundle-products', getBundleProducts);
router.get('/bundle-products/:id', getBundleProductById);
router.put('/bundle-products/:id', updateBundleProduct);
router.delete('/bundle-products/:id', deleteBundleProduct);

export default router;
