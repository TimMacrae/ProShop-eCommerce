import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

// @desc    Register user
// @route   Post /api/users
// @access  Public
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email, password, name } = req.body;

    const user = await registerUser(email, password, name);

    if (user === "Invalid user data") {
      res.status(400);
      throw new Error("Invalid user data");
    }
    if (user === "User already exist") {
      res.status(400);
      throw new Error("User already exist");
    }
    console.log(user);
    if (user) {
      res.json(user);
    }
  })
);

// @desc    Auth user & get token
// @route   Post /api/users/login
// @access  Public
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await authUser(email, password);
    console.log("be", user);
    if (user && user !== "Invalid Email or Password") {
      res.json(user);
    } else {
      res.status(401);
      throw new Error('"Invalid Email or Password"');
    }
  })
);

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await getUserProfile(req.user._id);
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

// userRouter.post(async (req, res) => {
//   console.log(req.body);

//   const user = await User.findOne({ email });
//   if (user && (await user.matchPassword(password))) {
//     res.send({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: null,
//     });
//   } else {
//     res.status(401);
//     throw new Error("invalid Emal or Password");
//   }
// });

export default userRouter;
