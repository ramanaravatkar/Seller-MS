import { Request, Response } from 'express';
import Product from '../models/product';

export const addDiscount = async (req: Request, res: Response) => {
  const { discount } = req.body;
  const product = await Product.findByIdAndUpdate(req.params.productId, { discount }, { new: true });
  res.json(product);
};

export const updateDiscount = async (req: Request, res: Response) => {
  const { discount } = req.body;
  const product = await Product.findByIdAndUpdate(req.params.productId, { discount }, { new: true });
  res.json(product);
};
