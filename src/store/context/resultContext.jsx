import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import React, { useReducer, createContext } from "react";



export const ResContext = createContext();

const initialState = {
  explain: [],
  title: [],
  tips: [],
  error: null,
  loading: false,
  message: null,
  cartItems:[],
};

const messageSuccess = (state, action) => {
  return updateObject(state, {
    message: null,
    
  });
};

const errorSuccess = (state, action) => {
  return updateObject(state, {
    error:null,
  });
};
const getGradedASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGradedASNTListSuccess = (state, action) => {
  return updateObject(state, {
    explain: action.res.explain,
    title: action.res.title,
    tips: action.res.tips,
    error: null,
    loading: false
  });
};

const getGradedASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createGradedASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    message:null,
  });
};

const createGradedASNTListSuccess = (state, action) => {
  return updateObject(state, {
    message: action.message,
    loading: false,
    explain: action.explain,
    title: action.title,
    tips: action.tips,
  });
};

const createGradedASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    message:null,
    loading: false
  });
};


const createASNTStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createASNTSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    cartItems: action.cartItems
  });
};

const createASNTFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createChildStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createChildSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createChildFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createResultStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createResultSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createResultFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const reducer = (state, action) => {
  switch (action.type) {
    
    case actionTypes.CREATE_ASSIGNMENT_START:
      return createASNTStart(state, action);
    case actionTypes.CREATE_ASSIGNMENT_SUCCESS:
      return createASNTSuccess(state, action);
    case actionTypes.CREATE_ASSIGNMENT_FAIL:
      return createASNTFail(state, action);

      case actionTypes.CREATE_CHILD_START:
        return createChildStart(state, action);
      case actionTypes.CREATE_CHILD_SUCCESS:
        return createChildSuccess(state, action);
      case actionTypes.CREATE_CHILD_FAIL:
        return createChildFail(state, action); 

        case actionTypes.CREATE_RESULT_START:
      return createResultStart(state, action);
    case actionTypes.CREATE_RESULT_SUCCESS:
      return createResultSuccess(state, action);
    case actionTypes.CREATE_RESULT_FAIL:
      return createResultFail(state, action);

      case actionTypes.MESSAGE_SUCCESS:
        return messageSuccess(state, action);
      case actionTypes.ERROR_SUCCESS:
          return errorSuccess(state, action);

    case actionTypes.GET_GRADED_ASSIGNMENT_LIST_START:
      return getGradedASNTListStart(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return getGradedASNTListSuccess(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL:
      return getGradedASNTListFail(state, action);  
 

    case actionTypes.CREATE_GRADED_ASSIGNMENT_LIST_START:
      return createGradedASNTListStart(state, action);
    case actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return createGradedASNTListSuccess(state, action);
    case actionTypes.CREATE_GRADED_ASSIGNMENTS_LIST_FAIL:
      return createGradedASNTListFail(state, action);    
    default:
      return state;
  }
};


export const ResContextProvider = props => {
   const [resstate, resdispatch] = useReducer(reducer, initialState);
 
  return (
    <ResContext.Provider value={{resstate, resdispatch}}>
      {props.children}
    </ResContext.Provider>
  );
};


