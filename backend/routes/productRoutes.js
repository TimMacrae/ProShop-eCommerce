import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../schema/productModal.js";

const productRouter = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
productRouter.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Puplic
productRouter.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default productRouter;
