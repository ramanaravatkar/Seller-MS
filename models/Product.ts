import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    sellerId: mongoose.Types.ObjectId;
    views: number;
    purchases: number;
    discount: {
        type: string;
        amount: number;
        startDate: Date;
        endDate: Date;
    };
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    sellerId: { type: mongoose.Types.ObjectId, required: true, ref: 'Seller' },
    views: { type: Number, default: 0 },
    purchases: { type: Number, default: 0 },
    discount: {
        type: {
            type: String,
            enum: ['percentage', 'fixed'],
            required: false,
        },
        amount: { type: Number, required: false },
        startDate: { type: Date, required: false },
        endDate: { type: Date, required: false },
    },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
