import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants/userConstance";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../actions/userActions";
import { USER_STATE } from "../actions/userActions";

export const userReducer = (state = USER_STATE, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, userInfo: payload, loading: false };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: payload };
    case USER_LOGOUT:
      return { userInfo: null, loading: false, error: null };
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, userInfo: payload, loading: false, error: null };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
