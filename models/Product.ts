import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  sellerId: string;
  name: string;
  price: number;
  description: string;
  discount?: number;
}

const ProductSchema: Schema = new Schema({
  sellerId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  discount: { type: Number },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
