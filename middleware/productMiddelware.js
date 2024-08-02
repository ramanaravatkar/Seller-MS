import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';

// Middleware to track product views
export const trackProductView = async (//req: Request, res: Response, next: NextFunction
    ) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (product) {
            product.views += 1;
            await product.save();
        }
        next();
    } catch (error) {
        next(error);
    }
};

// Middleware to track product purchases
export const trackProductPurchase = async (//req: Request, res: Response, next: NextFunction
    ) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findById(productId);
        if (product) {
            product.purchases += quantity;
            await product.save();
        }
        next();
    } catch (error) {
        next(error);
    }
};
