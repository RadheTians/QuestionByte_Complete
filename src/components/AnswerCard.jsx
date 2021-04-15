import moment from 'moment';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function AnswerCard(props) {

    return (
    <div class="card" style={{marginTop: '1px',background: 'rgba(255,255,255,0.12)'}}>
        <div class="card-body" style={{background: 'rgba(255,255,255,0)'}}>
            {props.data.userGender == "Male" ?
				<img className="user-profile-img" style={{height: '60px',width: '70px',borderRadius: '40px',borderWidth: '2px',borderStyle: 'solid',marginTop: '22px'}} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
				: <img className="user-profile-img" style={{height: '60px',width: '70px',borderRadius: '40px',borderWidth: '2px',borderStyle: 'solid',marginTop: '22px'}} src="https://www.clipartkey.com/mpngs/m/20-205433_woman-avatar-user-female.png" alt="Maxwell Admin"/>
			}
            <h6 class="text-capitalize text-info card-title" style={{marginLeft: '100px',marginTop: '-75px',width: '420px',fontFamily: 'Architects Daughter, cursive',fontSize: '23px'}}>{props.data.userName}</h6>
            <h6 style={{marginLeft: '100px',marginTop: '0px',fontSize: '12px',color: '#5bda1f'}}>Added an answer on {moment.utc(props.data.answeredTime).local().format("DD-MM-YYYY HH:mm")}</h6>
            <p class="text-justify card-text" style={{marginLeft: '100px',marginTop: '9px',textAlign: 'justify',color: '#0b0b0b',fontSize: '13px',fontFamily: 'Lora, serif'}}> {ReactHtmlParser(props.data.answer)}</p>
        </div>
    </div>
            
    );

}

export default AnswerCard;