import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';


function LogoutScreen(props) {

    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        dispatch(logout());
        props.history.push(redirect);
        return () => {
        //
        };
    }, []);

    return (
        <></>
    
    );

}

export default LogoutScreen;