import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api", productRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.underline
      .bold
  )
);
