import mongoose from 'mongoose';
import dbgr from 'debug';
import config from "config"
const debug = dbgr('development:mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(`${config.get("MONGODB_URL")}/SCATCH`);

       debug('Connected to MongoDB');
    } catch (error) {
        debug('Error connecting to MongoDB', error);
    }
};

export default connectDB;
