import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
