import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import {fileURLToPath} from 'url';
import connectDB from './config/mongoose-connect.js';
import ownerRouter from './routes/ownerRouter.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';


const app = express();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());    
app.use(express.static(path.join(__dirname, 'public')));





//Creating Routes
app.use("/owner", ownerRouter);
app.use("/user", userRouter);
app.use("/products", productRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});






