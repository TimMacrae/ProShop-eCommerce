import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILS,
} from "../reducers/constants/productConstans";
import { getAllProducts, getProductById } from "../api/apiProductsController";

//FETCH ALL PRUDUCTS FROM BACKEND
export const listProductsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    const products = await getAllProducts();
    //console.log("ACTION DATA", products.errorMessage);
    if (products.errorMessage) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: products.errorMessage,
      });
    }
    if (products && !products.errorMessage) {
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: products,
      });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
};

//FETCH PRUDUCT DETAILS FROM BACKEND
export const listProductDetailsAction = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
  });

  const product = await getProductById(id);
  if (product.errorMessage) {
    dispatch({
      type: PRODUCT_DETAILS_FAILS,
      payload: product.errorMessage,
    });
  }
  if (!product.errorMessage && product) {
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  }
};
