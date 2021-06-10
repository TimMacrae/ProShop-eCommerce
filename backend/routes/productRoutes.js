import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const productRouter = express.Router();

productRouter.route("/products").get(getProducts);
productRouter.route("/product/:id").get(getProductById);

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// productRouter.get(
//   "/products",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     //console.log("Backend", products);
//     res.json(products);
//   })
// );

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Puplic
// productRouter.get(
//   "/product/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Product not found");
//     }
//   })
// );

export default productRouter;
