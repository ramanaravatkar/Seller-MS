import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import reportRoutes from './routes/reportRoutes';
import analyticsRoutes from './routes/analycticsRoutes';
import discountRoutes from './routes/discountRoutes';
import bundleRoutes from './routes/bundleRoutes';

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/seller-ms', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/bundles', bundleRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
