import dotenv from 'dotenv';
import logger from '../utils/logger.js';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URI=process.env.MONGO_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        logger.info('Mongo DB connection successfully') 
    }catch(err){
        logger.info("Mongo Connection Error");
        logger.info(err);
        process.exit(0);
    }
}

export default connectDB;