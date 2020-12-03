import axios from "axios";
import * as actionTypes from "./actionTypes";
import  {cart_item} from '../clientResult';
import  {HOST_URL} from '../clientResult';

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

const createChildStart = () => {
  return {
    type: actionTypes.CREATE_CHILD_START
  };
};

const createResultStart = () => {
  return {
    type: actionTypes.CREATE_RESULT_START
  };
};


const createASNTSuccess=(message, cart) => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_SUCCESS,
    message:message,
    cartItems: cart
  };
};

const createChildSuccess=() => {
  return {
    type: actionTypes.CREATE_CHILD_SUCCESS,
    
  };
};

const createResultSuccess=() => {
  return {
    type: actionTypes.CREATE_RESULT_SUCCESS,
    
  };
};

const createASNTFail = error => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_FAIL,
    error: error
  };
};

const createResultFail = error => {
  return {
    type: actionTypes.CREATE_RESULT_FAIL,
    error: error
  };
};

const createChildFail = error => {
  return {
    type: actionTypes.CREATE_CHILD_FAIL,
    error: error
  };
};


export const createASNT = (cart,dispatch) => {
 
 
  dispatch(createASNTStart());
  // cart_item['cartitem'] = cart
      dispatch(createASNTSuccess('Submitted', cart));
    console.log(cart_item['cartitem'])

};


export const createChild = (token, child, dispatch) => {
 
    dispatch(createChildStart());
    console.log(token,child)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
  axios
      .post(`${HOST_URL}/clients/childs/`, child)
      .then(res => {
        console.log(res)
        dispatch(createChildSuccess());

      })
      .catch(err => {
        console.log(err.response.request.responseText)
        // dispatch(createChildFail(err.response.request.responseText));
      });
  
};

export const createResult = (token, result, dispatch) => {
 
    dispatch(createResultStart());
    console.log(token,result)
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
  axios
      .post(`${HOST_URL}/clients/results/`, result)
      .then(res => {
        console.log(res)
        dispatch(createResultSuccess());
        

      })
      .catch(err => {
        console.log(err.response.request.responseText)
        dispatch(createResultFail(err.response.request.responseText));
      });
  
};

