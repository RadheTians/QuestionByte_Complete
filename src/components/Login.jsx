import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';

import Spinner from "./Spinner";

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if (userInfo ) {
            props.history.push(redirect);
        } 
        return () => {
        //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));

    }

    return (
        <>
        {loading ? <Spinner/>: 
            <div className="register-photo" style={{marginTop: '30px',paddingBottom: '20px'}}>
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form onSubmit={submitHandler}>
                        <h2 className="text-center"><strong>Log-In</strong> to account.</h2>
                        <div className="form-group"><input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/></div>
                        <div className="form-group"><input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" required/></div>
                        {/* {loading && <div>Loading...</div>} */}
                        
                        {error && <div className="error-message">{error}</div>}
                        <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign In</button></div>
                        <Link className="already" to='/register'>You don't have an account? SignUp here.</Link></form>
                </div>
            </div>
        }
        </>
    );

}

export default Login;