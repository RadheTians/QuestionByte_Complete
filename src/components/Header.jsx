import React from 'react';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

function Header(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container"><Link className="navbar-brand logo" to="/">QuestionByte</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/aboutus"><strong>ABOUT US</strong></Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>
                    <li className="nav-item">
                    {userInfo ? (
                        <div className="dropdown">
                        <button className="btn nav-link active" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {userInfo.userName}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="nav-link active" aria-current="page" to="/profile">Veiw Profile</Link>
                        <Link className="nav-link active" aria-current="page" to="/update">Update Profile</Link>
                        <Link className="nav-link active" aria-current="page" to="/logout">Logout</Link>
                        </div>
                      </div>
                        
                      
                    ) : (
                        <Link className="nav-link active"  to="/login" type="button">Login</Link>
                    )}
                        
                    </li>
                </ul>
            </div>
        </div>  
    </nav>
    );

}

export default Header;