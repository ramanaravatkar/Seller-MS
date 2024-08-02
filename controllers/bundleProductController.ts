import { Request, Response } from 'express';
import BundleProduct from '../models/bundleProduct';

// Create Bundle Product
export const addBundleProduct = async (req: Request, res: Response) => {
    try {
        const bundleProduct = new BundleProduct(req.body);
        await bundleProduct.save();
        res.status(201).json({ message: 'Bundle product added successfully', bundleProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get All Bundle Products
export const getBundleProducts = async (req: Request, res: Response) => {
    try {
        const bundleProducts = await BundleProduct.find().populate('products');
        res.status(200).json(bundleProducts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get Bundle Product by ID
export const getBundleProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const bundleProduct = await BundleProduct.findById(id).populate('products');
        if (!bundleProduct) {
            return res.status(404).json({ message: 'Bundle product not found' });
        }
        res.status(200).json(bundleProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update Bundle Product
export const updateBundleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const bundleProduct = await BundleProduct.findByIdAndUpdate(id, req.body, { new: true });
        if (!bundleProduct) {
            return res.status(404).json({ message: 'Bundle product not found' });
        }
        res.status(200).json({ message: 'Bundle product updated successfully', bundleProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete Bundle Product
export const deleteBundleProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const bundleProduct = await BundleProduct.findByIdAndDelete(id);
        if (!bundleProduct) {
            return res.status(404).json({ message: 'Bundle product not found' });
        }
        res.status(200).json({ message: 'Bundle product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
