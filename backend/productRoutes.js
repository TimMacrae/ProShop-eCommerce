import express from "express";
import mySqlModule from "./modules/mySqlModule.js";
const { getAllProducts, getProduct } = mySqlModule;
const productRouter = express.Router();

productRouter.get("/products", (req, res) => {
  getAllProducts()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      return err;
    });
});

productRouter.get("/product/:id", (req, res) => {
  getProduct(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      return err;
    });
});

export default productRouter;
