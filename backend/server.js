import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import productRouter from "./productRoutes.js";

dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.underline
      .bold
  )
);
