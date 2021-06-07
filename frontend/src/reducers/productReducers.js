import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILS,
} from "./constants/productConstans";

const productState = {
  products: [],
  productDetails: null,
  loading: false,
  error: null,
};

export const productListReducer = (state = productState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, error: null, products: payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, productDetails: payload };
    case PRODUCT_DETAILS_FAILS:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
