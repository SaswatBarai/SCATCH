import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/SCATCH');

        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
