import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants/userConstance";
import { USER_STATE } from "../actions/userActions";

export const userReducer = (state = USER_STATE, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { userInfo: payload, loading: false };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return { userInfo: {} };

    default:
      return state;
  }
};
