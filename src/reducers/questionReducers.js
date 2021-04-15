import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAIL,
    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL,
    QUESTION_SAVE_REQUEST,
    QUESTION_SAVE_SUCCESS,
    QUESTION_SAVE_FAIL,
    QUESTION_DELETE_REQUEST,
    QUESTION_DELETE_SUCCESS,
    QUESTION_DELETE_FAIL,
    QUESTION_REVIEW_SAVE_SUCCESS,
    QUESTION_REVIEW_SAVE_REQUEST,
    QUESTION_REVIEW_SAVE_FAIL,
    QUESTION_REVIEW_SAVE_RESET,
  } from '../constants/questionConstants';
  
  function questionListReducer(state = { questions: [] }, action) {
    switch (action.type) {
      case QUESTION_LIST_REQUEST:
        return { loading: true, questions: [] };
      case QUESTION_LIST_SUCCESS:
        return { loading: false, questions: action.payload };
      case QUESTION_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function questionDetailsReducer(state = { questions: []}, action) {
    switch (action.type) {
      case QUESTION_DETAILS_REQUEST:
        return { loading: true};
      case QUESTION_DETAILS_SUCCESS:
        return { loading: false, questions: action.payload };
      case QUESTION_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function questionDeleteReducer(state = { question: {} }, action) {
    switch (action.type) {
      case QUESTION_DELETE_REQUEST:
        return { loading: true };
      case QUESTION_DELETE_SUCCESS:
        return { loading: false, question: action.payload, success: true };
      case QUESTION_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  function questionSaveReducer(state = { question: {} }, action) {
    switch (action.type) {
      case QUESTION_SAVE_REQUEST:
        return { loading: true };
      case QUESTION_SAVE_SUCCESS:
        return { loading: false, success: true, question: action.payload };
      case QUESTION_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function questionReviewSaveReducer(state = {}, action) {
    switch (action.type) {
      case QUESTION_REVIEW_SAVE_REQUEST:
        return { loading: true };
      case QUESTION_REVIEW_SAVE_SUCCESS:
        return { loading: false, review: action.payload, success: true };
      case QUESTION_REVIEW_SAVE_FAIL:
        return { loading: false, errror: action.payload };
      case QUESTION_REVIEW_SAVE_RESET:
        return {};
      default:
        return state;
    }
  }
  
  export {
    questionListReducer,
    questionDetailsReducer,
    questionSaveReducer,
    questionDeleteReducer,
    questionReviewSaveReducer,
  };