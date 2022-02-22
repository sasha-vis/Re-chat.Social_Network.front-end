import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import userIcon from './../../../../images/df-user-icon.png';

import Button from "../../../Common/Button";

import { getData } from './../../../../actions/user.action';

function exitAccount(props) {
    if(localStorage.getItem('token')) localStorage.removeItem('token');
    props.changeButton();
}

function HeaderIfAuth(props) {

    useEffect(function(){
        getUserData();
    }, []);

    async function getUserData() {
        props.getData()
    }

    return (
        <div className='auth-block'>
            <img src={userIcon} alt="user icon"></img>
            <span>{props.user != 0 ? props.user.user.data.email.split('@')[0] : ''}</span>
            <Button className='sign-up' innerHTML={<NavLink to="/" onClick={() => exitAccount(props)}><h3 className='sign-up-title'>Exit</h3></NavLink>}></Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog,
    user: state.user
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data)),
    getData: () => dispatch(getData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIfAuth);