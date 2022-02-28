import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';
import { getUserData } from './../../../../actions/user.action';

import NavForAuth from './../Nav/Common/NavForAuth.js';
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";
import ErrorMessage from "../../../Common/ErrorMessage";
// import axios from "axios";

const url = 'https://localhost:7103/Account/Login';

async function login(data, props, setEmailError, setPasswordError, setEmail, setPassword) {
    if(data.email.trim() != '') {
        if(data.password.trim() != '') {
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
                props.getUserData();
                setEmail('');
                setPassword('');
                setEmailError('');
                setPasswordError('');
            } else {
                console.error('Ошибка:');
            }
            } catch (error) {
            console.error('Ошибка:', error);
            }
        } else {
            setEmailError('');
            setPasswordError('The password is empty');
        }
    } else {
        setEmailError('The email is empty');
    }
}

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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
                    <ErrorMessage innerHTML={emailError} />
                    <div><Input type={"email"} value={email} func={handleChangeEmail} placeholder="Insert email" /></div>
                    <ErrorMessage innerHTML={passwordError} />
                    <div><Input type={"password"} value={password} func={handleChangePassword} placeholder="Insert password" /></div>
                    <Button onClick={() => login({"email": email, "password": password}, props, setEmailError, setPasswordError, setEmail, setPassword)} innerHTML={<NavLink to="/">Sign in</NavLink>} />
                </form>

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data)),
    getUserData: () => dispatch(getUserData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);