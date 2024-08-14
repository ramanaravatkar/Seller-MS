import Sale from '../models/sale';

export const getSalesReport = async (startDate: Date, endDate: Date) => {
  return Sale.aggregate([
    { $match: { saleDate: { $gte: startDate, $lte: endDate } } },
    { $group: {
      _id: null,
      totalSales: { $sum: '$totalPrice' },
      totalQuantity: { $sum: '$quantity' }
    } }
  ]);
};
