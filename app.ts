import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import bundleProductRoutes from './routes/bundleProductRoutes';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

// Routes
app.use('/api', productRoutes);
app.use('/api', bundleProductRoutes);

mongoose.connect('mongodb://localhost:27017/sellerms',
     { 
        // useNewUrlParser: true,
        //  useUnifiedTopology: true
         })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Could not connect to MongoDB', err));
