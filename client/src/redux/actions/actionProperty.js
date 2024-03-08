import axios from "axios";
import { ADDPROPERTY, ADDPROPERTY_FAIL, ADDPROPERTY_SUCCESS, DELETEPROPERTY, DETAILPROPERTY, GETPROPERTYS } from "../actionTypes/actionTypeProperty";


//get all propertys
export const getAllPropertys = () => async(dispatch) => {
    try {
      const res = await axios.get("/property/getAllPropertys");
      dispatch (
        {
        type : GETPROPERTYS,
        payload : res.data
        }
      );
    } catch (error) {
      alert("get all propertys error")
    }
  };
  

  
//getLastPropertys
export const getLastPropertys = () => async(dispatch) => {
  try {
    const res = await axios.get("/property/getLastPropertys");
    dispatch (
      {
      type : GETPROPERTYS,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get Last Propertys error")
  }
};


//getUserPropertys
export const getUserPropertys = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/property/getUserPropertys/${userId}`); 
    dispatch({
      type: GETPROPERTYS,
      payload: res.data
    });
  } catch (error) {
    alert("Get User Propertys Error");
  }
};
  

  //// add property
export const createproperty = (newproperty) => async (dispatch) => {
  dispatch({ type: ADDPROPERTY });
  try {
    const res = await axios.post("/property/add_property", newproperty);
    if (res && res.data) {
      dispatch({
        type: ADDPROPERTY_SUCCESS,
        payload: res.data,
      });
    } else {
      throw new Error("Response data is missing or undefined.");
    }
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ADDPROPERTY_FAIL,
      payload: error.response ? error.response.data : error.message,
    });
  }
  
};


// deleteProperty()
export const deleteProperty = (id) => async(dispatch) => {
  try {
    const res = await axios.post(`/property/deleteProperty/${id}`);
    dispatch(
      {
        type : DELETEPROPERTY,
        payload : res.data.id
      }
    )
  } catch (error) {
    alert("Delete Property Error")
  }
}


// //edit property
// export const editeproperty = (property) => async(dispatch) => {
//   try {
//       const res = await axios.put(`/property/updateproperty/${property._id}`, property);
//       dispatch(
//           {
//               type : UPDATEPROPERTY,
//               payload : res.data
//           }
//       )
//   } catch (error) {
//       alert("update property error");
//   }
// };



//get one property
export const getOneProperty = (_id) => async(dispatch) => {
  try {
    const res = await axios.get(`/property/getOneProperty/${_id}`);
    dispatch(
      {
        type : DETAILPROPERTY,
        payload : res.data
      }
    )
  } catch (error) {
    alert("get one property error");
  }
}



