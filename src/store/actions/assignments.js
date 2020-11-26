// import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {cart_item} from '../clientResult';

const getASNTListStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_LIST_START
  };
};

const getASNTListSuccess = assignments => {
  return {
    type: actionTypes.GET_ASSIGNMENTS_LIST_SUCCESS,
    cartItem :assignments
  };
};

const getASNTListFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENTS_LIST_FAIL,
    error: error
  };
};

// export const getASNTS = (token,dispatch) => {
  
//     dispatch(getASNTListStart());
//      axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
    
//      axios
//       .get("/assignments/")
//       .then(res => {
//         const assignments = res.data;
//         console.log(token,assignments);
//         dispatch(getASNTListSuccess(assignments));
//       })
//       .catch(err => {
//         dispatch(getASNTListFail(err.response.data.message));
//       });
      
  
// };

export const getASNTS = (dispatch) => {
  
  dispatch(getASNTListStart());
   
  dispatch(getASNTListSuccess(cart_item['cartitem']));
  console.log(cart_item['cartitem'])
    
};

const getASNTDetailStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_START
  };
};

const getASNTDetailSuccess = assignment => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_SUCCESS,
    assignment
  };
};

const getASNTDetailFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_FAIL,
    error: error
  };
};

export const getASNTSDetail = (token, id, dispatch) => {
  
    // dispatch(getASNTDetailStart());
    // axios.defaults.headers = {
    //   "Content-Type": "application/json",
    //   Authorization: `Token ${token}`
    // };
    //  axios
    //   .get(`/assignments/${id}/`)
    //   .then(res => {
    //     const assignment = res.data;
    //     dispatch(getASNTDetailSuccess(assignment));
    //     console.log(token,assignment);
    //   })
    //   .catch(err => {
    //     dispatch(getASNTDetailFail(err.response.data.message));
    //   });
};

const createASNTStart = () => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_START
  };
};

const createASNTSuccess=() => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_SUCCESS,
    
  };
};

const createASNTFail = error => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_FAIL,
    error: error
  };
};


export const createASNT = (cart,dispatch) => {
 
 
  dispatch(createASNTStart());
  cart_item['cartitem'] = cart
      dispatch(createASNTSuccess('Submitted'));
    console.log(cart_item['cartitem'])

};

// export const createASNT = (token, asnt,dispatch) => {
 
//     dispatch(createASNTStart());
//     console.log(token,asnt)
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
//   axios
//       .post(`/assignments/`, asnt)
//       .then(res => {
//         dispatch(createASNTSuccess());
//         ;

//       })
//       .catch(err => {
//         dispatch(createASNTFail(err.response.data.message));
//       });
  
// };
