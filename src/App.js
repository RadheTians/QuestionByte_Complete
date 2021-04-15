import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

import'./index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainScreen from './components/MainScreen';
import Register from './components/Register';
import Login from './components/Login';
import UserProfileScreen from "./components/UserProfileScreen";
import UpdateProfileScreen from "./components/UpdateProfileScreen";
import QuestionScreen from './components/QuestionScreen';
import AskQuestionScreen from './components/AskQuestionScreen';
import AnswerQuestionScreen from './components/AnswerQuestionScreen';
import AboutUsScreen from "./components/AboutUsScreen";
import UsersScreen from "./components/UsersScreen";
import BlogScreen from "./components/BlogScreen";
import HelpScreen from "./components/HelpScreen";
import TagsScreen from './components/TagsScreen';
import FeedbackScreen from './components/FeedbackScreen';
import LogoutScreen from './components/LogoutScreen';

function App() {

    return (
        <Router>
             <Header/>
            <Switch >
                <Route exact path = "/" component = { MainScreen}/> 
                <Route exact path = "/login" component = { Login}/>
                <Route exact path = "/register" component = { Register }/>
                <Route exact path = "/profile" component = { UserProfileScreen }/>
                <Route exact path = "/update" component = { UpdateProfileScreen }/>
                <Route exact path = "/question" component = { QuestionScreen }/>
                <Route exact path = "/askquestion" component = { AskQuestionScreen }/>
                <Route exact path = "/answerquestion" component = { AnswerQuestionScreen }/>
                <Route exact path = "/aboutus" component = { AboutUsScreen }/>
                <Route exact path = "/allusers" component = { UsersScreen }/>
                <Route exact path = "/blog" component = { BlogScreen }/>
                <Route exact path = "/help" component = { HelpScreen }/>
                <Route exact path = "/tags" component = { TagsScreen }/>
                <Route exact path = "/feedback" component = { FeedbackScreen }/>
                <Route exact path = "/logout" component = { LogoutScreen }/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;