import mongoose, { Document, Schema } from 'mongoose';

interface IAnalytics extends Document {
  productId: string;
  views: number;
  purchases: number;
}

const AnalyticsSchema: Schema = new Schema({
  productId: { type: String, required: true },
  views: { type: Number, default: 0 },
  purchases: { type: Number, default: 0 },
});

export default mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);
