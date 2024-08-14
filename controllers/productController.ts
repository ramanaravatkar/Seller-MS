import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProducts(req.userId as string);  // Ensure req.userId is properly cast
    res.json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProduct(req.params.id);  // Use service to get a product
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);  // Use service to update product
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productService.deleteProduct(req.params.id);  // Use service to delete product
    res.json({ message: 'Product deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct({ ...req.body, sellerId: req.userId as string });  // Use service to create product
    res.status(201).json(product);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};
