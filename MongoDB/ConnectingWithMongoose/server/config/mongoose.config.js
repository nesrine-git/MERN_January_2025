import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'firstConnectionWithDB',
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } catch (error) {
        throw error;
      }
    };
    

    export default connectDB;


