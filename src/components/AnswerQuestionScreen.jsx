import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveAnswer} from '../actions/questionActions';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Spinner from "./Spinner";
import { Redirect } from 'react-router';

function AnswerQuestionScreen(props) {
    const question = props.location.state;
    const ques = useSelector((state) => state.questionSave);
    const { quon, error,loading, success } = ques;
    const [answer, setAnswer] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        
        if (!userInfo) {
            props.history.push("/login");
        }
        return () => {
        //
        };
    }, [userInfo]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        // questionId, userId, userName, answer
        dispatch(saveAnswer(question._id, userInfo._id, userInfo.userName, userInfo.gender, answer));
        // props.history.push('/');

    }

    if (success) {
        return <Redirect to="/" />
    }
  

    return (
    <>
    {loading ? <Spinner/>: 
        <form  onSubmit={submitHandler} className="ask-question">
            
            <h1>{question.title}</h1>
            <div className="form-group"><small className="form-text text-muted question-label">Answer to the Question*</small><label className="question-hint">Include all the information someone would need to understand your answer</label>
                <CKEditor editor={ClassicEditor} data={answer} onChange={( event, editor ) => setAnswer(editor.getData())} />
            </div>
            <div className="form-group">
                {error && <div className="error-message">{error}</div>}
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">Save</button>
            </div>
        </form>
    }
    </>
            
    );

}

export default AnswerQuestionScreen;