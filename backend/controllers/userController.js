import User from "../schema/userModal.js";
import generateToken from "../utils/generateToken.js";

// @desc    Aregister a new user
// @route   Post /api/users
// @access  Public
export const registerUser = async (email, password, name) => {
  const userExist = await User.findOne({ email });
  if (userExist) {
    return "User already exist";
  } else {
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    if (user) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      };
    } else {
      return "Invalid user data";
    }
  }
};

// @desc    Auth user & get token
// @route   Post /api/users/login
// @access  Public
export const authUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
  } else {
    return "Invalid Email or Password";
  }
};

// @desc    user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (_id) => {
  const user = await User.findById(_id);
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  };
};
