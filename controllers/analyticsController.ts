import { Request, Response } from 'express';
import Analytics from '../models/analytics';

export const getProductAnalytics = async (req: Request, res: Response) => {
  const analytics = await Analytics.findOne({ productId: req.params.productId });
  res.json(analytics);
};
