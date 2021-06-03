import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api", productRouter);

// app.use((req, res, next) => {
//   const error = new Error(`Not found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// });

// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "production" ? null : err.stack,
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.underline
      .bold
  )
);
