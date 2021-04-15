import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { saveQuestion} from '../actions/questionActions';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Spinner from "./Spinner";
import Select from "react-dropdown-select";

const options = [
    {
      value: "5c23e2fb4f3801c34cd976b5",
      label: "Python"
    },
    {
      value: "5c23e2fbcdc84527d218caca",
      label: "Python2"
    },
    {
      value: "5c23e2fb60c7814e787d8b09",
      label: "Python3",
    },
    {
      value: "5c23e2fb2d6b939c5059eb4f",
      label: "C++"
    },
    {
      value: "5c23e2fbd35b006de4b977cf",
      label: "Java"
    },
    {
      value: "5c23e2fb165946d26073846f",
      label: "ReactJs"
    },
    {
      value: "5c23e2fb1e8d68045cddaa86",
      label: "NodeJs"
    },
    {
      value: "5c23e2fb9cb97207ff60d97f",
      label: "Angular"
    },
    {
      value: "5c23e2fb919074d4f00cf11f",
      label: "C"
    }
  ];

function AskQuestionScreen(props) {
    
    const questions = useSelector((state) => state.questionSave);
    const { question, error,loading, success } = questions;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(tags)
        var tag = []
        for (let index = 0; index < tags.length; index++) {
            tag.push(tags[index].label);
            
        }
        // console.log(tag)
        dispatch(saveQuestion(userInfo._id, userInfo.userName, userInfo.gender, title, description,tag));
        // props.history.push('/');

    }

    if (success) {
      return <Redirect to="/" />
    }


    return (
        <>
        
        {loading? <Spinner/> :
            <form  onSubmit={submitHandler} className="ask-question">
                <div className="form-group"><small className="form-text text-muted question-label">Question Title*</small><label className="question-hint">Be specific and imagine you’re asking a question to another person</label>
                    <input className="form-control form-control-lg" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="e.g. Is there an R function for finding the index of an element in a vector?" style={{fontSize: '12px', fontFamily: 'Montserrat, sans-serif'}} required/>
                </div>
                <div className="form-group"><small className="form-text text-muted question-label">Question Body*</small><label className="question-hint">Include all the information someone would need to answer your question</label>
                    {/* <textarea className="form-control form-control-lg" onChange={(e) => setDescription(e.target.value)} required></textarea> */}
                    <CKEditor editor={ClassicEditor} data={description} onChange={( event, editor ) => setDescription(editor.getData())} />
                </div>
                <div className="form-group"><small className="form-text text-muted question-label">Question Topics*</small><label className="question-hint">Add up to 5 topics to describe what your question is about</label>
                    {/* <input className="form-control"  type="text" placeholder="e.g. net,php,json,python" style={{fontSize: '12px', fontFamily: 'Montserrat, sans-serif'}} required/> */}
                    <Select className="form-control" multi dropdownPosition="auto" options={options} placeholder="e.g. net,php,json,python" onChange={(value) => setTags(value)} required/>
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

export default AskQuestionScreen;