import React from "react";
import { NavLink } from "react-router-dom";
// import {Route, Routes} from 'react-router-dom';

import leftArrow from './../images/left-arrow.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

function SignUp(props) {
    return (
        <div className="sign-up-block">
            <nav className="nav">
                <ul className="nav-list">
                    <li><NavLink to="/"><img className='sign-in-logo' src={leftArrow}></img><h3 className='sign-in-title'>Main page</h3></NavLink></li>
                </ul>
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Registration</h1>
                    <h3 className="auth-info">If you already have an account, you can <NavLink to="/SignIn">Sign In</NavLink></h3>
                </div>

                <form className="auth-form">
                    <div><input placeholder="Insert email"></input></div>
                    <div><input placeholder="Insert password"></input></div>
                    <div><input placeholder="Confirm password"></input></div>
                    <div><input placeholder="Insert name"></input></div>
                    <div><input placeholder="Insert surname"></input></div>
                    <div><input placeholder="Select gender"></input></div>
                    <div><input placeholder="Insert birth date"></input></div>
                    <div><input placeholder="Stick a photo"></input></div>
                    <button><NavLink to="/" onClick={() => props.changeButton()}>Sign up</NavLink></button>
                </form>

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

// export default SignUp;