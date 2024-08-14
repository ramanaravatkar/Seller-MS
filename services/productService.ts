import Product from '../models/product';

export const createProduct = async (productData: any) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

export const getProducts = async (sellerId: string) => {
  return Product.find({ sellerId });
};

export const getProduct = async (productId: string) => {
  return Product.findById(productId);
};

export const updateProduct = async (productId: string, updateData: any) => {
  return Product.findByIdAndUpdate(productId, updateData, { new: true });
};

export const deleteProduct = async (productId: string) => {
  return Product.findByIdAndDelete(productId);
};
