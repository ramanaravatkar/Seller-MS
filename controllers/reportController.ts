import { Request, Response } from 'express';
import Sale from '../models/sale';

export const getSalesReport = async (req: Request, res: Response) => {
  const { startDate, endDate } = req.query;
  const sales = await Sale.find({ saleDate: { $gte: startDate, $lte: endDate } });
  // Generate report logic here
  res.json(sales);
};
