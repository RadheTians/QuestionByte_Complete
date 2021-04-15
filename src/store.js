import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
  userListReducer,
} from './reducers/userReducers';

import {
  questionListReducer,
  questionDetailsReducer,
  questionSaveReducer,
  questionDeleteReducer,
  questionReviewSaveReducer,
} from './reducers/questionReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  userSignin: { userInfo },
};
const reducer = combineReducers({
  questionList: questionListReducer,
  questionDetails: questionDetailsReducer,
  questionSave: questionSaveReducer,
  questionDelete: questionDeleteReducer,
  questionReviewSave: questionReviewSaveReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;