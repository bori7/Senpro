// import axios from "axios";
import * as actionTypes from "./actionTypes";
// import  {res} from '../clientResult';

const getGradedASNTListStart = () => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENT_LIST_START
  };
};

const getGradedASNTListSuccess = res=> {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
    res: res
  };
};

export const messageSuccess = (dispatch) => {
  return dispatch({
    type: actionTypes.MESSAGE_SUCCESS,
  })
};

export const errorSuccess = (dispatch) => {
  return dispatch({
    type: actionTypes.ERROR_SUCCESS,
  })
};

const getGradedASNTListFail = error => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL,
    error: error,
    
  };
};

const createGradedASNTListStart = () => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENT_LIST_START,
    
  };
};
const createGradedASNTListSuccess = (message,res) => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS,
    message:message,
    title:res.title,
    explain:res.explain,
    tips:res.tips
  };
};

const createGradedASNTListFail = error => {
  return {
    type: actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_FAIL,
    error: error,
  };
};

// export const getGradedASNTS = (username, token,dispatch) => {
 
//     dispatch(getGradedASNTListStart());
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
//     axios
//       .get(`/graded-assignments/?username=${username}`)
//       .then(res => {
//         const assignments = res.data;
//         dispatch(getGradedASNTListSuccess(assignments));
//         console.log(assignments)
//       })
//       .catch(err => {
//         dispatch(getGradedASNTListFail(err.response.data.message));
//       });
//   };

export const getGradedASNTS = (dispatch) => {
 
  dispatch(getGradedASNTListStart());
 
 
    // const assignments = res.data;
    dispatch(getGradedASNTListSuccess());
    console.log()
    
   
};

// export const createGradedASNT = (token, asnt, dispatch) => {
  
//       dispatch(createGradedASNTListStart());
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`
//     };
//    axios
//       .post(`/graded-assignments/create/`, asnt)
//       .then(res => {
//         // console.log("success",asnt);
//         //console.log('now',res);
//           dispatch(createGradedASNTListSuccess('Submitted'));
//       })
//       .catch(err => {
//         console.log('now',err);
//           dispatch(createGradedASNTListFail(err));
//       });
// };
export const createGradedASNT = (asnt, dispatch) => {
  
  dispatch(createGradedASNTListStart());
      // res['explain'] = asnt.explain 
      // res['title'] = asnt.title
      // res['tips'] = asnt.tips

      dispatch(createGradedASNTListSuccess('Submitted', asnt));
    console.log(asnt)
      // dispatch(createGradedASNTListFail(err));
  
};
