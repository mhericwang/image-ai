import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import imageaiRoutes from './routes/imageaiRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/imageai', imageaiRoutes)

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL); // this can fail so try catch...
        app.listen(8080, () => console.log('Server has started on port https://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
    
}

startServer();
