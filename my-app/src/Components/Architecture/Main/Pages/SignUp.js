import React from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import NavForAuth from "./../Nav/Common/NavForAuth.js";
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";

function SignUp(props) {
    return (
        <div className="sign-up-block">

            <NavForAuth />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Registration</h1>
                    <h3 className="auth-info">If you already have an account, you can <NavLink to="/SignIn">Sign In</NavLink></h3>
                </div>

                <form className="auth-form">
                    <div><Input placeholder="Insert email" /></div>
                    <div><Input placeholder="Insert password" /></div>
                    <div><Input placeholder="Confirm password" /></div>
                    <div><Input placeholder="Insert name" /></div>
                    <div><Input placeholder="Insert surname" /></div>
                    <div><Input placeholder="Select gender" /></div>
                    <div><Input placeholder="Insert birth date" /></div>
                    <div><Input placeholder="Stick a photo" /></div>
                    <Button innerHTML={<NavLink to="/" onClick={() => props.changeButton()}>Sign up</NavLink>} />
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