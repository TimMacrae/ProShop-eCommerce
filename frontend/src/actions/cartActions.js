import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "../reducers/constants/cartConstans";
import axios from "axios";

export const addToCartAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/product/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      counInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCartAction = (_id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: _id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
