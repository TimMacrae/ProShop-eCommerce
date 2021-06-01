const express = require("express");
const app = express();
const mySqlModule = require("./modules/mySqlModule");
const { getAllProducts } = mySqlModule;
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  getAllProducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      return err;
    });
});

app.listen(5000, console.log("Server running on port 5000"));
