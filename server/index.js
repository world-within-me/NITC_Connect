import express, { json } from "express";
import dotenv from "dotenv";
import connect from "./db.js";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import communityRouter from "./routes/communityRoutes.js";
import joinRouter from "./routes/joinRoutes.js"
const app = express();

dotenv.config();


app.use(express.json());
app.use(cookieParser());

app.use('/auth',authRoutes)
app.use('/communities', communityRouter);
app.use('/join',joinRouter)



await connect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });