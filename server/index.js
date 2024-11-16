import express, { json } from "express";
import dotenv from "dotenv";
import connect from "./db.js";
const app = express();

dotenv.config();


app.use(express.json());


app.use((req, res, next) => {

  next();
});




await connect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });