import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  connectDB();
});
