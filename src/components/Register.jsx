import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PasswordStrengthBar from 'react-password-strength-bar';
import { register } from '../actions/userActions';

import Spinner from "./Spinner";

function Register(props) {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [role, setRole] = useState('Student');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  var { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    
    if (userInfo) {
      props.history.push(redirect);
    } else {
      //userInfo
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(password===passwordConfirm){
      
      dispatch(register(userName, email, gender, role, password, passwordConfirm));
    }else{
      error = "Password doesn't match!!";
      setMessage("Password doesn't match!!")
      console.log(error)
    }
  }

    return (
      <>
      {loading? <Spinner/> :
        <div className="register-photo" style={{marginTop: '30px',paddingBottom: '20px'}}>
            <div className="form-container">
                <div className="image-holder"></div>
                <form onSubmit={submitHandler}>
                    <h2 className="text-center"><strong>Create</strong> an account.</h2>
                    <div className="form-group"><input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/></div>
                    <div className="form-group"><input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="User Name" required /></div>
                    <div className="form-group">
                      <select className="form-control" onChange={(e) => setGender(e.target.value)} >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control" onChange={(e) => setRole(e.target.value)} >
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Staff">Staff</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value); setMessage("")}}  placeholder="Password" required/> 
                      <PasswordStrengthBar password={password} />
                    </div>
                    
                    <div className="form-group"><input type="password" className="form-control" onChange={(e) => {setPasswordConfirm(e.target.value); setMessage("")}} placeholder="Confirm Password" required/></div>
                    
                    {error && <div className="error-message">{error}</div>}
                    {message && <div className="error-message">{message}</div>}
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign Up</button></div>
                    <Link className="already" to='/login'>You already have an account? Login here.</Link>
                </form>
            </div>
        </div>
      }
      </>
    );

}

export default Register;