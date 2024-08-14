import mongoose, { Document, Schema } from 'mongoose';

interface IBundle extends Document {
  sellerId: string;
  products: string[];
  discount: number;
}

const BundleSchema: Schema = new Schema({
  sellerId: { type: String, required: true },
  products: [{ type: String, required: true }],
  discount: { type: Number, required: true },
});

export default mongoose.model<IBundle>('Bundle', BundleSchema);
