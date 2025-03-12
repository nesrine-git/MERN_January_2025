import express from "express"
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongoose.config.js';

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;
connectDB();  // Connect to MongoDB

app.listen(PORT, ()=> {
    console.log(`>>>>>>>> Listening on port: ${PORT}`)
})
