
import axios from "axios";
import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOG_IN, LOG_IN_FAIL, LOG_IN_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS, USER_LOGOUT } from "../actionTypes/actionTypesUser";
  
  export const userSignUp = (user) => async (dispatch) => {
    dispatch({ type: SIGN_UP });
    try {
      const res = await axios.post("user/register", user);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  export const userLogIn = (user) => async (dispatch) => {
    dispatch({
      type: LOG_IN,
    });
    try {
      const res = await axios.post("user/login", user);
      dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      dispatch({
        type: LOG_IN_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  export const getUserProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE });
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: token },
    };
    console.log()
    try {
      const res = await axios.get("user/auth", config);
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_PROFILE_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  export const userLogout = () => {
    return {
      type: USER_LOGOUT,
      payload: localStorage.removeItem("token"),
    };
  };
  