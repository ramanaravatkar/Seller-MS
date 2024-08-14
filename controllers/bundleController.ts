import { Request, Response } from 'express';
import Bundle from '../models/bundle';

export const createBundle = async (req: Request, res: Response) => {
  const bundle = new Bundle({ ...req.body, sellerId: req });
  await bundle.save();
  res.status(201).json(bundle);
};

export const updateBundle = async (req: Request, res: Response) => {
  const bundle = await Bundle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bundle);
};

export const deleteBundle = async (req: Request, res: Response) => {
  await Bundle.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bundle deleted' });
};
