import React from "react";
import { NavLink } from "react-router-dom";

import leftArrow from './../images/left-arrow.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

function SignIn(props) {
    return (
        <div className="sign-in-block">
            <nav className="nav">
                <ul className="nav-list">
                    <li><NavLink to="/"><img className='sign-in-logo' src={leftArrow}></img><h3 className='sign-in-title'>Main page</h3></NavLink></li>
                </ul>
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Log in</h1>
                    <h3 className="auth-info">If you don't have an account yet, you can <NavLink to="/SignUp">Sign Up</NavLink></h3>
                </div>

                <form className="auth-form">
                    <div><input placeholder="Insert mail"></input></div>
                    <div><input placeholder="Insert password"></input></div>
                    <button><NavLink to="/" onClick={() => props.changeButton()}>Sign in</NavLink></button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


// export default SignIn;