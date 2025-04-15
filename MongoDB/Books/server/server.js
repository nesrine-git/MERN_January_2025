import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/book.routes.js';
import normalizeError from './utils/normalizeError.js';
import response from './utils/response.js';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT;
dbConnect();

app.use('/api', router);

// 404 handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    err.name = 'Not Found';
    next(err);
  });
  

// Global error handler
app.use((err, req, res, next) => {
    const normalized = normalizeError(err);
    //response(res,normalized.statusCode,false,normalized.message,normalized.validations) 
    res.status(normalized.statusCode).json(normalized);
  });




app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);