import React from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import NavForAuth from './../Nav/Common/NavForAuth.js';
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";

function SignIn(props) {
    return (
        <div className="sign-in-block">

            <NavForAuth />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Log in</h1>
                    <h3 className="auth-info">If you don't have an account yet, you can <NavLink to="/SignUp">Sign Up</NavLink></h3>
                </div>

                <form className="auth-form">
                    <div><Input placeholder="Insert email" /></div>
                    <div><Input placeholder="Insert password" /></div>
                    <Button innerHTML={<NavLink to="/" onClick={() => props.changeButton()}>Sign in</NavLink>} />
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