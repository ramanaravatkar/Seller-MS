import mongoose, { Schema, Document } from 'mongoose';

export interface IBundleProduct extends Document {
    name: string;
    description: string;
    products: mongoose.Types.ObjectId[]; // Array of product IDs
    bundlePrice: number;
    sellerId: mongoose.Types.ObjectId;
    sales: number;
}

const BundleProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: 'Product', required: true }],
    bundlePrice: { type: Number, required: true },
    sellerId: { type: mongoose.Types.ObjectId, required: true, ref: 'Seller' },
    sales: { type: Number, default: 0 },
});

export default mongoose.model<IBundleProduct>('BundleProduct', BundleProductSchema);
