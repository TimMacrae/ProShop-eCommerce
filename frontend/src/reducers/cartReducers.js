import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./constants/cartConstans";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((i) => i._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i._id === existItem._id ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload),
      };

    default:
      return state;
  }
};
