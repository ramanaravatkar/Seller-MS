import mongoose, { Document, Schema } from 'mongoose';

interface ISale extends Document {
  productId: string;
  quantity: number;
  totalPrice: number;
  saleDate: Date;
}

const SaleSchema: Schema = new Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  saleDate: { type: Date, default: Date.now },
});

export default mongoose.model<ISale>('Sale', SaleSchema);
