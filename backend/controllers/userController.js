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
  if (user) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
  } else {
    return "Can't find your profile";
  }
};

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (_id, updateUser) => {
  const user = await User.findById(_id);
  if (user) {
    (user.name = updateUser.name || user.name),
      (user.email = updateUser.email || user.email);
    if (updateUser.password) {
      user.password = updateUser.password;
    }

    const updatedUser = await user.save();
    return {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    };
  } else {
    return "Can't update your profile";
  }
};
