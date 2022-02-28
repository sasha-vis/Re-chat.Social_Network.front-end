import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import NavForAuth from "./../Nav/Common/NavForAuth.js";
import Button from "../../../Common/Button";
import Input from "../../../Common/Input";
import ErrorMessage from "../../../Common/ErrorMessage";

const url = 'https://localhost:7103/Account/Registration';

async function registration(
    data, 
    props, 
    setEmailError, 
    setPasswordError,
    setCpasswordError,
    setUsernameError,
    setSurnameError,
    setGenderError,
    setBirthdateError,
    setPhotoError,
    setEmail,
    setPassword,
    setCpassword,
    setUsername,
    setSurname,
    setGender,
    setBirthdate,
    setPhoto) {
    if(data.email.trim() != ''){
        if(data.password.trim() != ''){
            if(data.confirmPassword.trim() != ''){
                if(data.password === data.confirmPassword) {
                    if(data.name.trim() != ''){
                        if(data.surname.trim() != ''){
                            if(data.gender.trim() != ''){
                                if(data.birthdayDate.trim() != ''){
                                    // if(data.photo.trim() != ''){
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
                                                setEmail('');
                                                setPassword('');
                                                setCpassword('');
                                                setUsername('');
                                                setSurname('');
                                                setGender('');
                                                setBirthdate('');
                                                setPhoto('');
                                                setEmailError('');
                                                setPasswordError('');
                                                setCpasswordError('');
                                                setUsernameError('');
                                                setSurnameError('');
                                                setGenderError('');
                                                setBirthdateError('');
                                                setPhotoError('');
                                            } else {
                                                console.error('Ошибка:');
                                            }
                                            } catch (error) {
                                            console.error('Ошибка:', error);
                                            }
                                    // } else {
                                    //     setPhotoError('The photo is empty')
                                    //     setEmailError('')
                                    //     setPasswordError('')
                                    //     setCpasswordError('')
                                    //     setUsernameError('')
                                    //     setSurnameError('')
                                    //     setGenderError('')
                                    //     setBirthdateError('')
                                    // }
                                } else {
                                    setBirthdateError('The birthdate is empty')
                                    setEmailError('')
                                    setPasswordError('')
                                    setCpasswordError('')
                                    setUsernameError('')
                                    setSurnameError('')
                                    setGenderError('')
                                }
                            } else {
                                setGenderError('The gender is empty')
                                setEmailError('')
                                setPasswordError('')
                                setCpasswordError('')
                                setUsernameError('')
                                setSurnameError('')
                            }
                        } else {
                            setSurnameError('The surname is empty')
                            setEmailError('')
                            setPasswordError('')
                            setCpasswordError('')
                            setUsernameError('')
                        }
                    } else {
                        setUsernameError('The username is empty')
                        setEmailError('')
                        setPasswordError('')
                        setCpasswordError('')
                    }
                } else {
                    setCpasswordError("Passwords don't match")
                    setEmailError('')
                    setPasswordError('')
                }
            } else {
                setCpasswordError('The confirm password is empty')
                setEmailError('')
                setPasswordError('')
            }
        } else {
            setPasswordError('The password is empty')
            setEmailError('')
        }
    } else {
        setEmailError('The email is empty')
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

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cPasswordError, setCpasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [birthdateError, setBirthdateError] = useState('');
    const [photoError, setPhotoError] = useState('');

    return (
        <div className="sign-up-block">

            <NavForAuth />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Registration</h1>
                    <h3 className="auth-info">If you already have an account, you can <NavLink to="/SignIn">Sign In</NavLink></h3>
                </div>

                <form className="auth-form">
                    <ErrorMessage innerHTML={emailError} />
                    <div><Input type={"email"} value={email} func={handleChangeEmail} placeholder="Insert email" /></div>
                    <ErrorMessage innerHTML={passwordError} />
                    <div><Input type={"password"} value={password} func={handleChangePassword} placeholder="Insert password" /></div>
                    <ErrorMessage innerHTML={cPasswordError} />
                    <div><Input type={"password"} value={cPassword} func={handleChangeCpassword} placeholder="Confirm password" /></div>
                    <ErrorMessage innerHTML={usernameError} />
                    <div><Input type={"text"} value={username} func={handleChangeName} placeholder="Insert name" /></div>
                    <ErrorMessage innerHTML={surnameError} />
                    <div><Input type={"text"} value={surname} func={handleChangeSurname} placeholder="Insert surname" /></div>
                    <ErrorMessage innerHTML={genderError} />
                    <div><Input type={"text"} value={gender} func={handleChangeGender} placeholder="Select gender" /></div>
                    <ErrorMessage innerHTML={birthdateError} />
                    <div><Input type={"text"} value={birthdate} func={handleChangeBirthdate} placeholder="Insert birth date" /></div>
                    <ErrorMessage innerHTML={photoError} />
                    <div><Input type={"text"} value={photo} func={handleChangePhoto} placeholder="Stick a photo" /></div>
                    <Button innerHTML={<NavLink to="/" onClick={() => registration({    "email": email,
                                                                                        "password": password,
                                                                                        "confirmPassword": cPassword,
                                                                                        "name": username,
                                                                                        "surname": surname,
                                                                                        "gender": gender,
                                                                                        "birthdayDate": birthdate,
                                                                                        "photo": photo }, 
                                                                                        props, 
                                                                                        setEmailError, 
                                                                                        setPasswordError,
                                                                                        setCpasswordError,
                                                                                        setUsernameError,
                                                                                        setSurnameError,
                                                                                        setGenderError,
                                                                                        setBirthdateError,
                                                                                        setPhotoError,
                                                                                        setEmail,
                                                                                        setPassword,
                                                                                        setCpassword,
                                                                                        setUsername,
                                                                                        setSurname,
                                                                                        setGender,
                                                                                        setBirthdate,
                                                                                        setPhoto)}>Sign up</NavLink>} />
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