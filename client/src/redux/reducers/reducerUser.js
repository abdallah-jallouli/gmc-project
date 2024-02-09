

// import { BLOKINGUSER, GET_ALL_USER, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS, USER_LOGOUT } from "../actionTypes/actionTypesUser";

import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOG_IN_FAIL, LOG_IN_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "../actionTypes/actionTypesUser";


// const init = {
//    usersall:null,
//     user: null,
//     error: null,
//     loading: false,
//     token: localStorage.getItem("token"),
//     isAuth: false,
//   };
  
// // type et payload => apartir :action.js
//   export const userReducer = (state = init, { type, payload }) => {
//     switch (type) {
//       case SIGN_UP:
//         case LOGIN:
//           case GET_PROFILE:
      
         
//         return {
//           ...state,
//           loading: true,
//         };
//       case SIGN_UP_FAIL:
//         case LOGIN_FAIL:
//           case GET_PROFILE_FAIL:
 
         
//         return {
//           ...state,
//           loading: false,
//           error: payload,
//         };

       
//       case SIGN_UP_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           user: payload.user,
//           token:payload.token,
//           isAuth:true,
//            error: null,
//         };
          
       
//         // case LOGIN_SUCCESS:
//         //   return {
//         //     ...state,
//         //     loading: false,
//         //     error: null,
//         //     user: payload.user,
//         //     token: payload.token,
//         //     isAuth: true,
//         //   };
     
//         //   case GET_PROFILE_SUCCESS:
//         //     return{
//         //         ...state,loading:false,error:null,user:payload
//         //     }
//         //     case USER_LOGOUT:
//         //       return {};


//             //   /////get all users 
//             //   case GET_ALL_USER:
//             //     return { ...state,loading:false,error:null,usersall:payload }
//             //     /////edit user
//             //     case BLOKINGUSER:
//             //       return {
//             //           ...state, usersall:state.usersall.map( el => el._id === payload._id ?payload :el)
//             //       }
  
//       default:
//         return state;
//     }
//   };
  


const init = {
    user: "",
    error: [],
    loading: false,
    token: localStorage.getItem("token"),
    isAuth: false,
  };
  
  export const userReducer = (state = init, { type, payload }) => {
    switch (type) {
      case SIGN_UP:
      case LOG_IN_FAIL:
      case GET_PROFILE:
        return {
          ...state,
          loading: true,
        };
  
      case SIGN_UP_FAIL:
        case GET_PROFILE_FAIL : 
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
  
        case GET_PROFILE_SUCCESS : 
        return{
          ...state , loading : false ,
          user : payload.user,
        }
  
        // case LOGOUT:
        // return {
        //   ...state,
        //   user: [],
        //   error: [],
        //   isAuth: false,
        // };
  
      default:
        return state;
    }
  };
  