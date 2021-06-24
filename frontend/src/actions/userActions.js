//ACTIONS
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../reducers/constants/userConstance";
import axios from "axios";

//ACTIONS
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

//DEFAULT STATE
export const USER_STATE = {
  userInfo: null,
  loading: false,
  error: null,
};

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("LOGIN ERROR", error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({
      type: USER_LOGOUT,
    });
  };
};

///////////////////////
//REGISTER USER ACTIONS
export const registerAction = (name, email, password) => async (dispatch) => {
  if (!name && !email && !password) {
    const error = { message: "Some imputs are not right" };
    return dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message,
    });
  }
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/users",
      { name, email, password },
      config
    );
    console.log("REGISTER", data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
