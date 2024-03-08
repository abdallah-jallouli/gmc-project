// import { BLOKINGUSER, GET_ALL_USER, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS, USER_LOGOUT } from "../actionTypes/actionTypesUser";

import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOG_IN,
  LOG_IN_FAIL,
  LOG_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  USER_LOGOUT,
} from "../actionTypes/actionTypesUser";

const init = {
  user: "",
  error: [],
  loading: false,
  token: localStorage.getItem("token"),
  isAuth: false,
};

export const userReducer = (state = init, { type, payload }) => {
  // console.log("Reducer called with action type:", type);
  // console.log("Current state:", state);
  switch (type) {
    case SIGN_UP:
    case LOG_IN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case SIGN_UP_FAIL:
    case LOG_IN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        error: [],
      };

    case LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        isAuth: true,
        error: [],
        token: payload.token,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };

    case USER_LOGOUT:
    return {
      ...state,
      user: [],
      error: [],
      isAuth: false,
    };

    default:
      return state;
  }
};
