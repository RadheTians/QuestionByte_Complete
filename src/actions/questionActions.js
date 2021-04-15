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
    QUESTION_DELETE_SUCCESS,
    QUESTION_DELETE_FAIL,
    QUESTION_DELETE_REQUEST,
    QUESTION_REVIEW_SAVE_REQUEST,
    QUESTION_REVIEW_SAVE_FAIL,
    QUESTION_REVIEW_SAVE_SUCCESS,
  } from '../constants/questionConstants';
  import axios from 'axios';
  import Axios from 'axios';
  
  const base_url = 'https://questionbytebackend.herokuapp.com/api/users/';

  const listQuestions = (filter) => async (dispatch) => {
    try {
      dispatch({ type: QUESTION_LIST_REQUEST });
      const { data } = await axios.get(base_url + 'allquestions/?filter=' + filter);
      if(data.status==='success'){
        dispatch({ type: QUESTION_LIST_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: QUESTION_LIST_FAIL, payload: data.message });
      }
      
    } catch (error) {
      dispatch({ type: QUESTION_LIST_FAIL, payload: error.message });
    }
  };

  const saveQuestion = (askedUserId, askedUserName, askedUserGender, title, description, tags) => async (dispatch) => {
    dispatch({ type: QUESTION_SAVE_REQUEST, payload: {askedUserId, askedUserName, askedUserGender, title, description, tags} });
    try {
      const { data } = await Axios.post( base_url + 'askquestion', {askedUserId, askedUserName, askedUserGender, title, description, tags});
      if(data.status==='success'){
        dispatch({ type: QUESTION_SAVE_SUCCESS, payload: data.data });
      }else {
        dispatch({ type: QUESTION_SAVE_FAIL, payload: data.message });
      }
      
    } catch (error) {
      dispatch({ type: QUESTION_SAVE_FAIL, payload: error.message });
    }
  };
  
  const saveAnswer = (questionId, userId, userName, userGender, answer) => async (dispatch) => {
    dispatch({ type: QUESTION_SAVE_REQUEST, payload: {questionId, userId, userName, userGender, answer} });
    try {
      const { data } = await Axios.post( base_url + 'answertoquestion', {questionId, userId, userName, userGender, answer});
      if(data.status==='success'){
        dispatch({ type: QUESTION_SAVE_SUCCESS, payload: data.data });
      }else {
        dispatch({ type: QUESTION_SAVE_FAIL, payload: data.message });
      }
      
    } catch (error) {
      dispatch({ type: QUESTION_SAVE_FAIL, payload: error.message });
    }
  };
  
  const answersToQuestion = (id) => async (dispatch) => {
    try {
      dispatch({ type: QUESTION_DETAILS_REQUEST, payload: id });
      const { data } = await axios.get( base_url + 'answersofquestion/?id=' + id);
      if(data.status==='success'){
        dispatch({ type: QUESTION_DETAILS_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: QUESTION_DETAILS_FAIL, payload: data.message });
      }
    } catch (error) {
      dispatch({ type: QUESTION_DETAILS_FAIL, payload: error.message });
    }
  };
  
  const deleteProdcut = (productId) => async (dispatch, getState) => {
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      dispatch({ type: QUESTION_DELETE_REQUEST, payload: productId });
      const { data } = await axios.delete('/api/products/' + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: QUESTION_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: QUESTION_DELETE_FAIL, payload: error.message });
    }
  };
  
  const saveQuestionReview = (id, userId, vote) => async (dispatch) => {
    try {
      dispatch({ type: QUESTION_REVIEW_SAVE_REQUEST, payload: {id, userId, vote} });
      const { data } = await axios.post(base_url + 'updownvotequestion', {id, userId, vote});
      if(data.status==='success'){
        dispatch({ type: QUESTION_REVIEW_SAVE_SUCCESS, payload: data.data });
      } else {
        dispatch({ type: QUESTION_REVIEW_SAVE_FAIL, payload: data.message });
      }
    } catch (error) {
      // report error
      dispatch({ type: QUESTION_REVIEW_SAVE_FAIL, payload: error.message });
    }
  };
  
  export {
    listQuestions,
    saveQuestion,
    saveAnswer,
    answersToQuestion,
    deleteProdcut,
    saveQuestionReview
  };
