import React from "react";
import { NavLink } from 'react-router-dom';

import userIcon from './../images/df-user-icon.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

function HeaderIfAuth(props) {
    return (
        <div className='auth-block'>
            <img src={userIcon}></img>
            <span>username</span>
            {/* <button className='sign-in'><NavLink to="/SignIn"><h3 className='sign-in-title'>Sign In</h3></NavLink></button> */}
            <button className='sign-up'><NavLink to="/" onClick={() => props.changeButton()}><h3 className='sign-up-title'>Exit</h3></NavLink></button>
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

// export default HeaderIfAuth;