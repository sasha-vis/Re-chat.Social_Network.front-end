import React from "react";
import { NavLink } from 'react-router-dom';

import {connect} from "react-redux";
import { changeButton } from '../../../../../actions/isLog.action';

import profileLogo from './../../../../../images/profile.png';
import homeLogo from './../../../../../images/home.png';
import messengerLogo from './../../../../../images/messenger.png';
import friendsLogo from './../../../../../images/friends.png';
import bookmarkLogo from './../../../../../images/bookmark-icon.png';
import likeLogo from './../../../../../images/heart-icon.png';
import exitLogo from './../../../../../images/log-out.png';

function exitAccount(props) {
    if(localStorage.getItem('token')) localStorage.removeItem('token');
    props.changeButton();
}

function NavIfAuth(props) {
    return (
        <ul className="nav-list">
            <li><NavLink to="/Profile"><img className='sign-in-logo' src={profileLogo} alt="profile icon"></img><h3 className='sign-in-title'>My Profile</h3></NavLink></li>
            <li><NavLink to="/"><img className='sign-in-logo' src={homeLogo} alt="home icon"></img><h3 className='sign-in-title'>Main page</h3></NavLink></li>
            <li><NavLink to="/Messenger"><img className='sign-in-logo' src={messengerLogo} alt="messenger icon"></img><h3 className='sign-in-title'>Messenger</h3></NavLink></li>
            <li><NavLink to="/Friends"><img className='sign-in-logo' src={friendsLogo} alt="friends icon"></img><h3 className='sign-in-title'>Friends</h3></NavLink></li>
            <li><NavLink to="/Bookmarks"><img className='sign-in-logo' src={bookmarkLogo} alt="bookmarks icon"></img><h3 className='sign-in-title'>Bookmarks</h3></NavLink></li>
            <li><NavLink to="/Favorites"><img className='sign-in-logo' src={likeLogo} alt="favorites icon"></img><h3 className='sign-in-title'>Favorites</h3></NavLink></li>
            <li className="exit"><NavLink to="/" onClick={() => exitAccount(props)}><img className='sign-in-logo' src={exitLogo} alt="exit icon"></img><h3 className='sign-in-title'>Exit</h3></NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(NavIfAuth);