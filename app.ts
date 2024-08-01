import express, { Application } from 'express';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
