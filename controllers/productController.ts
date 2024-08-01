import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { Sale } from '../models/sale';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock, sellerId } = req.body;
    const product = new Product({
      name,
      description,
      price,
      stock,
      sellerId,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,
      price,
      stock,
    }, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error});
  }
};

export const recordSale = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock available' });
    }

    const totalAmount = product.price * quantity;
    product.stock -= quantity;
    product.sold += quantity;
    await product.save();

    const sale = new Sale({
      productId: product._id,
      sellerId: product.sellerId,
      quantity,
      totalAmount,
    });
    await sale.save();

    res.status(201).json({ message: 'Sale recorded successfully', sale });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getSalesReport = async (req: Request, res: Response) => {
  try {
    const sales = await Sale.find({ sellerId: req.body.sellerId }).populate('productId');
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};
