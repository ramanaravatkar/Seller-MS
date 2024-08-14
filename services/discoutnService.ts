import Product from '../models/product';

export const addDiscount = async (productId: string, discount: number) => {
  return Product.findByIdAndUpdate(productId, { discount }, { new: true });
};

export const updateDiscount = async (productId: string, discount: number) => {
  return Product.findByIdAndUpdate(productId, { discount }, { new: true });
};
