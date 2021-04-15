import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveQuestion} from '../actions/questionActions';
import {Button,Modal} from 'react-bootstrap';
import  { Link, Redirect } from 'react-router-dom'

import QuestionCard from './QuestionCard';
import { listQuestions } from '../actions/questionActions';
import Spinner from "./Spinner";

function MainScreen(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const questionList = useSelector((state) => state.questionList);
    const { questions, loading, error } = questionList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listQuestions("main"));
        return () => {
        //
        };
    }, []);

    const handleShow = () => {

        if(!userInfo){
            props.history.push('/login');
        } else {
            // setShow(true);
            props.history.push('/askquestion');
            
        }
        
    }

    const handleNewest = () => {
        dispatch(listQuestions("date"));
    }

    const handleMostAnswered = () => {
        dispatch(listQuestions("mostanswered"));
    }

    const handleVoted = () => {
        dispatch(listQuestions("voted"));
    }

    const handleAnswered = () => {
        // dispatch(listQuestions("answered"));
    }

    const handleUnanswered = () => {
        dispatch(listQuestions("unanswered"));
    }
    
    
    return (

    <main className="page landing-page">
        <section className="clean-block slider dark">
            <div className="container-fluid" style = {{ height: '330px'}}>
                <div className="carousel slide" data-ride="carousel" id="carousel-1" style= {{height: '370px'}}>
                    <div className="carousel-inner" style={{height: '370px', marginTop: '30px'}}>
                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/scenery/image1.jpg" alt="Slide Image"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/scenery/image4.jpg" alt="Slide Image"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/scenery/image6.jpg" alt="Slide Image"/></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button"
                            data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-1" data-slide-to="1"></li>
                        <li data-target="#carousel-1" data-slide-to="2"></li>
                    </ol>
                </div>
            </div>
        </section>
       
        <section style={{fontFamily: 'Montserrat, sans-serif',marginBottom: '30px',marginTop: '10px'}}>
            <div className="container-fluid" id="question">
                <div className="row">
                    <div className="col-lg-2 col-xl-3 offset-xl-0" style={{width: '82px',background: 'rgba(255,255,255,0)',borderRightStyle: 'none'}}>
                        <ul className="list-group text-body" style={{ padding: '20px',fontSize: '16px',fontFamily: 'Lora, serif',paddingTop: '50px'}}>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-home" style={{marginRight: '9px'}}></i><Link to="/"><span style={{fontFamily: 'Lora, serif'}}>Home</span></Link></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-tags" style={{marginRight: '9px'}}></i><Link to="/tags"><span>Topics</span></Link></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-users" style={{marginRight: '9px'}}></i><Link to="/allusers"><span>Users</span></Link></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-book-reader" style={{marginRight: '9px'}}></i><span onClick={handleNewest}>New Questions</span></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="material-icons" style={{marginRight: '6px',marginTop: '0px'}}>trending_up</i><span onClick={handleMostAnswered} >Trending Questions</span></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-vote-yea" style={{marginRight: '9px'}}></i><span onClick={handleVoted}>Voted Questions</span></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-blog" style={{marginRight: '9px'}}></i><Link to="/blog"><span>Blog</span></Link></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-hands-helping" style={{marginRight: '9px'}}></i><Link to="/help"><span>Help</span></Link></li>
                            <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fa fa-group" style={{marginRight: '9px'}}></i><Link to="/aboutus"><span>About US</span></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-7 col-xl-7 offset-lg-0" style={{marginBottom: '12px', padding: '0px', borderWidth: '1px', borderRightWidth: '1px', borderRightStyle: 'solid',borderLeftWidth: '1px', borderLeftStyle: 'solid'}}>
                        <div className="container" style={{marginBottom: '0px', borderStyle: 'none', padding: '0px'}}>
                            <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                                <div className="container"><a className="navbar-brand" href="#">All Questions</a>
                                    <div className="collapse navbar-collapse" id="navcol-1" style={{width: '485px'}}>
                                        
                                        <Button onClick={handleShow} style={{background: 'rgb(58,187,242)', marginLeft: '355px'}}>Ask Question</Button>
                                    </div>
                                </div>
                            </nav>
                            <ul className="nav nav-pills float-right">
                                <li className="nav-item"><Button onClick={handleNewest} className="nav-link active">Newest</Button></li>
                                <li className="nav-item"><Button onClick={handleMostAnswered} className="nav-link" >Most Answered</Button></li>
                                <li className="nav-item"><Button onClick={handleVoted} className="nav-link" >Most Voted</Button></li>
                                {/* <li className="nav-item"><Button onClick={handleAnswered} className="nav-link" >Answered</Button></li> */}
                                <li className="nav-item"><Button onClick={handleUnanswered} className="nav-link" >Unanswered</Button></li>
                            </ul>
                        </div>
                        <hr />
                        { loading ? (
                            // <div>Loading...</div>
                            <Spinner/>
                        ) : error ? (
                            <div>{error}</div>
                        ) : (
                            questions.map((question) => (
                                <QuestionCard
                                    key={question._id}
                                    data = {question}
                                    />
                            ))
                        )}
                    </div>

                    <div className="col-lg-2" style={{borderWidth: '-5px'}}>
                        <ul className="list-group text-body float-left">
                            <li className="list-group-item text-body"><i className="fas fa-home" style={{marginRight: '9px'}}></i><span>All Users</span></li>
                            <li className="list-group-item" ><i className="fas fa-tags" style={{marginRight: '9px'}}></i><span>Tag Questions</span></li>
                            <li className="list-group-item" ><i className="fa fa-star" style={{marginRight: '9px'}}></i><span>Voted Questions</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </main>
    );

}

export default MainScreen;