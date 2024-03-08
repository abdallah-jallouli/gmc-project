import { combineReducers } from "redux";
import { propertyReducer } from "./reducerProperty";
import { userReducer } from "./reducerUser";

export default combineReducers({ userReducer, propertyReducer });
