import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import userIcon from './../../../../images/df-user-icon.png';

import Button from "../../../Common/Button";

async function getData(setData) {
    if (localStorage.getItem('token') !== null) {
        let userId = JSON.parse(localStorage.getItem('token')).user[2];
        let token = JSON.parse(localStorage.getItem('token')).token;
    
        await fetch(`https://localhost:7103/User/${userId}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }})
        .then((response) => {
        return response.json();
        })
        .then((data) => {
            setData(data);
        });
    }
}

function exitAccount(props) {
    if(localStorage.getItem('token')) localStorage.removeItem('token');
    props.changeButton();
}

function HeaderIfAuth(props) {
    const [data, setData] = useState('');

    useEffect(function(){
        getData(setData);
    }, [props.isLog])

    return (
        <div className='auth-block'>
            <img src={userIcon} alt="user icon"></img>
            <span>{data !== '' ? data.email.split('@')[0] : ''}</span>
            <Button className='sign-up' innerHTML={<NavLink to="/" onClick={() => exitAccount(props)}><h3 className='sign-up-title'>Exit</h3></NavLink>}></Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog,
    userProfile: state.userProfile
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIfAuth);