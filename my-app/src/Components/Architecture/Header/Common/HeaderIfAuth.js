import React from "react";
import { NavLink } from 'react-router-dom';

import {connect} from "react-redux";
import { changeButton } from './../../../../actions/isLog.action';

import userIcon from './../../../../images/df-user-icon.png';

import Button from "../../../Common/Button";

function HeaderIfAuth(props) {
    return (
        <div className='auth-block'>
            <img src={userIcon} alt="user icon"></img>
            <span>username</span>
            <Button className='sign-up' innerHTML={<NavLink to="/" onClick={() => props.changeButton()}><h3 className='sign-up-title'>Exit</h3></NavLink>}></Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIfAuth);