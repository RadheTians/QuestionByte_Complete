import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { answersToQuestion,saveQuestionReview } from '../actions/questionActions';
import AnswerCard from "./AnswerCard";
import Spinner from "./Spinner";
import Popup from "reactjs-popup";
import moment from 'moment';
function QuestionScreen(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const question = props.location.state;
    const answersList = useSelector((state) => state.questionDetails);
    const { questions, loading, error } = answersList;
    const vote = useSelector((state) => state.questionReviewSave);
    const { vots, vtloading, vterror } = vote
    const dispatch = useDispatch();
    
    const [open, setOpen] = useState(false);

    const closeModel = () => setOpen(false);
    
    const upArrow = () => {
        if(!userInfo){
            props.history.push('/login');
        } else {
            let flag = 0;
            question.votes.forEach(element => {
                if(element === userInfo._id){
                    flag = 1; 
                    setOpen(e => !e);
                }
            });
            if(flag === 0){
                dispatch(saveQuestionReview(question._id,userInfo._id,1));
            }
            
            
        }
        
    }

    const downArrow = () => {
        if(!userInfo){
            props.history.push('/login');
        } else {
            let flag = 0;
            question.votes.forEach(element => {
                if(element === userInfo._id){
                    flag = 1; 
                    setOpen(e => !e);
                }
            });
            if(flag === 0){
                dispatch(saveQuestionReview(question._id,userInfo._id,-1));
            }
        }
    }
    
    useEffect(() => {
        dispatch(answersToQuestion(question._id));
        return () => {
        //
        };
    }, []);
    return (
    <>
   
    { vtloading ? <Spinner/> :
    <main className="page landing-page">
    <Popup open={open} closeOnDocumentClick onClose={closeModel}>
        <div className="model">
        <a className="close" onClick={closeModel}></a>
        You have already Voted!!!
        </div>
    </Popup>
    <section style={{fontFamily: 'Montserrat, sans-serif',marginBottom: '30px',marginTop: '10px'}}>
        <div className="container-fluid" id="question">
            <div className="row">
                <div className="col-lg-2 col-xl-3 offset-xl-0" style={{width: '82px',background: 'rgba(255,255,255,0)',borderRightStyle: 'none'}}>
                    <ul className="list-group text-body" style={{ padding: '20px',fontSize: '16px',fontFamily: 'Lora, serif',paddingTop: '50px'}}>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-home" style={{marginRight: '9px'}}></i><span style={{fontFamily: 'Lora, serif'}}>Home</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-tags" style={{marginRight: '9px'}}></i><span>Tags</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-users" style={{marginRight: '9px'}}></i><span>Users</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-book-reader" style={{marginRight: '9px'}}></i><span>New Questions</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="material-icons" style={{marginRight: '6px',marginTop: '0px'}}>trending_up</i><span>Trending Questions</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-vote-yea" style={{marginRight: '9px'}}></i><span>Voted Questions</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-blog" style={{marginRight: '9px'}}></i><span>Blog</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fas fa-hands-helping" style={{marginRight: '9px'}}></i><span>Help</span></li>
                        <li className="list-group-item" style={{borderStyle: 'none'}}><i className="fa fa-group" style={{marginRight: '9px'}}></i><span>About US</span></li>
                    </ul>
                </div>
                <div className="col-lg-7 col-xl-7 offset-lg-0" style={{marginBottom: '12px',padding: '0px',borderWidth: '1px',borderRightWidth: '1px',borderRightStyle: 'solid',borderLeftWidth: '1px',borderLeftStyle: 'solid'}}>
                    <div className="container" style={{marginBottom: '0px',borderStyle: 'none',padding: '0px'}}>
                        <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                            <div className="container"><a className="navbar-brand" href="#">Question</a>
                                <div className="collapse navbar-collapse" id="navcol-1" style={{width: '485p'}}>
                                    <Link className="btn btn-light ml-auto" to="/askQuestion">Ask Question</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2">
                                <button onClick={upArrow} type="button" className="btn">
                                    <span className="fa fa-caret-up" style={{fontSize: '54px',marginTop: '41px',marginLeft: '10px',marginBottom: '0px',textAlign: 'center'}}></span>
                                </button>

                                <p style={{marginLeft: '28px',marginBottom: '0px',fontSize: '29px',height: '22px'}}>{question.votes.length}</p>
                                <button onClick={downArrow} type="button" className="btn">
                                    <span className="fa fa-sort-down" style={{fontSize: '54px',marginLeft: '10px',textAlign: 'center'}}></span>
                                </button>
                            </div>
                            <div className="col">
                                <h5 style={{margin: '0px',fontFamily: 'Lora, serif'}}>{question.title}</h5>
                                <p style={{fontFamily: 'Lora, serif',fontSize: '13px',textAlign: 'justify',marginTop: '16px'}}>{ReactHtmlParser(question.description)}</p>
                                <div className="row">
                                    <div className="col-xl-7">
                                        <ul className="nav">
                                            {question.tags.map((tag) => (
                                                <li className="nav-item"  key={tag} style={{ background: 'rgb(225,236,244)',margin: '5px',height: '30px'}}>{tag}</li>
                                            ))}
                                            
                                        </ul>
                                    </div>
                                    <div className="col-xl-5">
                                        <p className="text-center" style={{fontSize: '13px',fontFamily: 'Lora, serif',color: '#04f42b',margin: '0px'}}>asked {moment.utc(question.askedTime).local().format("DD-MM-YYYY HH:mm")}</p>
                                       
                                        {question.askedUserGender == "Male" ?
                                            <img style={{width: '50px', height: '50px'}} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
                                            : <img style={{width: '50px', height: '50px'}} src="https://www.clipartkey.com/mpngs/m/20-205433_woman-avatar-user-female.png" alt="Maxwell Admin"/>
                                        }
                                        
                                        <span style={{fontSize: '15px',fontFamily: 'Lora, serif'}}>{question.askedUserName}</span>
                                    </div>
                                    <div className="col">
                                        <nav className="navbar navbar-light navbar-expand-md float-right" style={{paddingTop: '8px',paddingLeft: '0px'}}>
                                            <div className="container-fluid">
                                                <div className="collapse navbar-collapse" id="navcol-2">
                                                    <ul className="nav navbar-nav">
                                                        <li className="nav-item"><a className="nav-link" href="#" style={{fontFamily: 'Lora, serif',fontSize: '21px',color: 'rgba(0,0,0,0.9)',marginRight: '50px',background: '#f4dbaa',borderRadius: '10px',borderWidth: '10px'}}>{question.answers.length} Answers</a></li>
                                                        <li className="nav-item"><Link className="nav-link" to={{ pathname:"/answerquestion", state:question}} style={{color: 'rgb(255,255,255)',background: '#1ab394',fontSize: '23px',fontFamily: 'Lora, serif',borderRadius: '25px'}}>Answer</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    { loading ? (
                            // <div>Loading...</div>
                            <Spinner/>
                        ) : error ? (
                            <div>{error}</div>
                        ) : (
                          
                            questions.map((answer) => (
                            
                                <AnswerCard
                                    key={answer._id}
                                    data = {answer}
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
    }
    </>
    );

}

export default QuestionScreen;