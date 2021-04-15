import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

function QuestionCard(props) {

   
    return (
    <div className="container" >
        <div className="row">
            <div className="col-xl-2">
                <p className="text-center" style={{fontSize: '30px',fontFamily: 'Montserrat, sans-serif',height: '35px', margin: '0px', marginTop: '0px'}}>{props.data.votes.length}</p>
                <p className="text-center" style={{margin: '0px',fontFamily: 'Lora, serif',marginTop: '10px'}}>Votes</p>
                <p className="text-center" style={{fontSize: '28px', height: '34px', marginBottom: '0px', marginTop: '15px'}}>100</p>
                <p className="text-center" style={{fontFamily: 'Lora, serif', marginTop: '10px',marginBottom: '0px'}}>Answers</p>
            </div>
            <div className="col">
                <h5 style={{margin: '0px', fontFamily: 'Lora, serif'}}><Link to={{ pathname:"/question", state:props.data}}>{props.data.title}</Link></h5>
                <p style={{fontFamily: 'Lora, serif',fontSize: '13px', textAlign: 'justify', marginTop: '16px'}}>{ReactHtmlParser(props.data.description)}</p>
                <div className="row" >
                    <div className="col-xl-7">
                        <ul className="nav">
                            {props.data.tags.map((tag) => (
                                <li className="nav-item" key={tag} style={{ background: 'rgb(225,236,244)',margin: '5px',height: '30px'}}>{tag}</li>
                            ))}
                            
                            
                        </ul>
                    </div>
                    <div className="col-xl-5">
                        <p className="text-center" style={{fontSize: '13px', fontFamily: 'Lora, serif', color: '#04f42b',margin: '0px'}}>asked {moment.utc(props.data.askedTime).local().format("DD-MM-YYYY HH:mm")}</p>
                        
                        {props.data.askedUserGender == "Male" ?
						    <img style={{width: '50px', height: '50px'}} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
						    : <img style={{width: '50px', height: '50px'}} src="https://www.clipartkey.com/mpngs/m/20-205433_woman-avatar-user-female.png" alt="Maxwell Admin"/>
					    }
                        
                        <span style={{fontSize: '15px', fontFamily: 'Lora, serif'}}>{props.data.askedUserName}</span>
                        </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
    );

}

export default QuestionCard;