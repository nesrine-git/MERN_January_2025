import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/book.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT;
dbConnect();

app.use('/api', router);

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);