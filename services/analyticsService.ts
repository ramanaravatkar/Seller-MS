import Analytics from '../models/analytics';

export const getProductAnalytics = async (productId: string) => {
  return Analytics.findOne({ productId });
};

export const updateProductAnalytics = async (productId: string, views: number, purchases: number) => {
  const analytics = await Analytics.findOneAndUpdate(
    { productId },
    { $inc: { views, purchases } },
    { new: true, upsert: true }
  );
  return analytics;
};
