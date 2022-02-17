import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import NavForAuth from "./../Nav/Common/NavForAuth.js";
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";

const url = 'https://localhost:7103/User/Registration';

async function registration(data, props) {
    try {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
            // 'Access-Control-Allow-Origin': '*',
            // 'Accept':'application/json'
        }
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
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


function SignUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCpassword] = useState('');
    const [username, setUsername] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [photo, setPhoto] = useState('');

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }
    
    function handleChangePassword(event) {
        setPassword(event.target.value);
    }
    function handleChangeCpassword(event) {
        setCpassword(event.target.value);
    }
    function handleChangeName(event) {
        setUsername(event.target.value);
    }
    function handleChangeSurname(event) {
        setSurname(event.target.value);
    }
    function handleChangeGender(event) {
        setGender(event.target.value);
    }
    function handleChangeBirthdate(event) {
        setBirthdate(event.target.value);
    }
    function handleChangePhoto(event) {
        setPhoto(event.target.value);
    }

    return (
        <div className="sign-up-block">

            <NavForAuth />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Registration</h1>
                    <h3 className="auth-info">If you already have an account, you can <NavLink to="/SignIn">Sign In</NavLink></h3>
                </div>

                <form className="auth-form">
                    <div><Input type={"email"} value={email} func={handleChangeEmail} placeholder="Insert email" /></div>
                    <div><Input type={"password"} value={password} func={handleChangePassword} placeholder="Insert password" /></div>
                    <div><Input type={"password"} value={cPassword} func={handleChangeCpassword} placeholder="Confirm password" /></div>
                    <div><Input type={"text"} value={username} func={handleChangeName} placeholder="Insert name" /></div>
                    <div><Input type={"text"} value={surname} func={handleChangeSurname} placeholder="Insert surname" /></div>
                    <div><Input type={"text"} value={gender} func={handleChangeGender} placeholder="Select gender" /></div>
                    <div><Input type={"text"} value={birthdate} func={handleChangeBirthdate} placeholder="Insert birth date" /></div>
                    <div><Input type={"text"} value={photo} func={handleChangePhoto} placeholder="Stick a photo" /></div>
                    <Button innerHTML={<NavLink to="/" onClick={() => registration({    "email": email,
                                                                                        "password": password,
                                                                                        "confirmPassword": cPassword,
                                                                                        "name": username,
                                                                                        "surname": surname,
                                                                                        "gender": gender,
                                                                                        "birthdayDate": birthdate,
                                                                                        "photo": photo }, props)}>Sign up</NavLink>} />
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