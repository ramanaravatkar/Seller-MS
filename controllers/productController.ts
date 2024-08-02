import { Request, Response } from 'express';
import Product from '../models/Product';

// CRUD Operations

export const addProduct = async (req: Request, res: Response) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add Discount to Product

export const addDiscount = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { type, amount, startDate, endDate } = req.body;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.discount = { type, amount, startDate, endDate };
        await product.save();

        res.status(200).json({ message: 'Discount added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get Analytics for a Product

export const getAnalytics = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const analytics = {
            views: product.views,
            purchases: product.purchases,
            revenue: product.purchases * product.price,
        };

        res.status(200).json({ message: 'Product analytics retrieved successfully', analytics });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Sales Report

export const getSalesReport = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({ sellerId: req.params.sellerId });
        if (!products.length) {
            return res.status(404).json({ message: 'No products found for this seller' });
        }

        const report = products.map(product => ({
            name: product.name,
            purchases: product.purchases,
            revenue: product.purchases * product.price,
        }));

        res.status(200).json({ message: 'Sales report generated successfully', report });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
