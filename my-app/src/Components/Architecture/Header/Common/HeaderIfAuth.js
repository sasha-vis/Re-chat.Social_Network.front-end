import React from "react";
import { NavLink } from 'react-router-dom';

import {connect} from "react-redux";
import { exitAccount } from './../../../../actions/user.action';

import userIcon from './../../../../images/df-user-icon.png';

import Button from "../../../Common/Button";

function HeaderIfAuth(props) {

    function exitAccount(props) {
        props.exitAccount();
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
    user: state.user
})
  
const mapDispatchToProps = (dispatch) => ({
    exitAccount: () => dispatch(exitAccount())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIfAuth);