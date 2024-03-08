import {
  ADDPROPERTY,
  ADDPROPERTY_FAIL,
  ADDPROPERTY_SUCCESS,
  DELETEPROPERTY,
  DETAILPROPERTY,
  GETPROPERTYS,
  UPDATEPROPERTY,
} from "../actionTypes/actionTypeProperty";

const init = {
  propertys: "",
  error: null,
  loading: false,
  property1: null,
};

export const propertyReducer = (state = init, { type, payload }) => {
  console.log("Reducer called with action type:", type);
  console.log("Current state:", state);
  switch (type) {
    case ADDPROPERTY:
      return {
        ...state,
        loading: true,
      };
    case ADDPROPERTY_SUCCESS:
      return {
        ...state,
        propertys: [...state.propertys, payload],
        loading: false,
      };
    case ADDPROPERTY_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case UPDATEPROPERTY:
      return {
        ...state,
        propertys: state.propertys.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };

    case DELETEPROPERTY:
      return {
        ...state,
        propertys: state.propertys.filter((el) => el._id !== payload),
      };

    case GETPROPERTYS:
      return {
        ...state,
        propertys: payload,
      };

    case DETAILPROPERTY:
      return {
        ...state,
        property1: payload,
      };

    default:
      return state;
  }
};

export default propertyReducer;
