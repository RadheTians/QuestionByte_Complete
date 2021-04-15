import Axios from "axios";
import Cookie from 'js-cookie';
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_LIST_FAIL,
    USER_LIST_SUCCESS,
    USER_LIST_REQUEST
} from "../constants/userConstants";

const base_url = 'https://questionbytebackend.herokuapp.com/api/users/';

const update = ( id, name, email, gender, role, about, department, college, dob, github, linkedIn, contactNo) => async(dispatch) => {
    
    dispatch({ type: USER_UPDATE_REQUEST, payload: { id, name, email, gender, role, about, department, college, dob, github, linkedIn, contactNo } });
    try {
        const { data } = await Axios.put( base_url + "updateuser", { id, name, email, gender, role, about, department, college, dob, github, linkedIn, contactNo });
        if(data.status==='success'){
            dispatch({ type: USER_UPDATE_SUCCESS, payload: data.data });
            Cookie.set('userInfo', JSON.stringify(data.data));
        } else {
            dispatch({ type: USER_UPDATE_FAIL, payload: data.message });
        }
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
}

const signin = (email, password) => async(dispatch) => {

    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post("https://questionbytebackend.herokuapp.com/api/users/login",{email,password});
        if(data.status==='success'){
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
            Cookie.set('userInfo', JSON.stringify(data.data));
        } else {
            dispatch({ type: USER_SIGNIN_FAIL, payload: data.message });
        }
        
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}

const getUser = (userId) => async(dispatch) => {

    dispatch({ type: USER_SIGNIN_REQUEST, payload: userId });
    try {
        const { data } = await Axios.get(base_url + "/getuser/?" + userId);
        if(data.status==='success'){
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
        } else {
            dispatch({ type: USER_SIGNIN_FAIL, payload: data.message });
        }
        
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}

const getAllUsers = () => async(dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });
        const { data } = await Axios.get(base_url + 'allusers' );
        if(data.status==='success'){
          dispatch({ type: USER_LIST_SUCCESS, payload: data.data });
        } else {
          dispatch({ type: USER_LIST_FAIL, payload: data.message });
        }
        
    } catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload: error.message });
    }
}


const register = (userName, email, gender, role, password, passwordConfirm) => async(dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { userName, email, gender, role, password, passwordConfirm} });
    try {
        const { data } = await Axios.post("https://questionbytebackend.herokuapp.com/api/users/signup", { userName, email, gender, role, password, passwordConfirm});
        if(data.status==='success'){
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
            //Cookie.set('userInfo', JSON.stringify(data.data));
        } else {
            dispatch({ type: USER_REGISTER_FAIL, payload: data.message });
        }
        
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
}

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
}

const getAllTags = () => async(dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });
        const { data } = await Axios.get(base_url + 'alltags' );
        if(data.status==='success'){
          dispatch({ type: USER_LIST_SUCCESS, payload: data.data });
        } else {
          dispatch({ type: USER_LIST_FAIL, payload: data.message });
        }
        
    } catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload: error.message });
    }
}

export { 
    signin,
    register,
    logout,
    update,
    getUser,
    getAllUsers,
    getAllTags
 };


// Axios.post("/api/users/login", { email,password})
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
