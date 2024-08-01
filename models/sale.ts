import { Schema, model, Document } from 'mongoose';

export interface ISale extends Document {
  productId: Schema.Types.ObjectId;
  sellerId: Schema.Types.ObjectId;
  quantity: number;
  totalAmount: number;
}

const SaleSchema = new Schema<ISale>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const Sale = model<ISale>('Sale', SaleSchema);

