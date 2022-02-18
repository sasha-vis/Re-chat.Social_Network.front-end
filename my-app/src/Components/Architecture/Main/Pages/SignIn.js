import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import NavForAuth from './../Nav/Common/NavForAuth.js';
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";
// import axios from "axios";

const url = 'https://localhost:7103/Account/Login';

async function login(data, props) {
    try {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const json = await response.json();
    if (json.token) {
        localStorage.setItem("token", JSON.stringify(json));
        props.changeButton();
    } else {
        console.error('Ошибка:');
    }
    } catch (error) {
    console.error('Ошибка:', error);
    }
}

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }
    
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }


    return (
        <div className="sign-in-block">

            <NavForAuth />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Log in</h1>
                    <h3 className="auth-info">If you don't have an account yet, you can <NavLink to="/SignUp">Sign Up</NavLink></h3>
                </div>

                <form className="auth-form">
                    <div><Input type={"email"} value={email} func={handleChangeEmail} placeholder="Insert email" /></div>
                    <div><Input type={"password"} value={password} func={handleChangePassword} placeholder="Insert password" /></div>
                    <Button innerHTML={<NavLink to="/" onClick={() => login({"email": email, "password": password}, props)}>Sign in</NavLink>} />
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