import React from "react";
import { NavLink } from 'react-router-dom';

import profileLogo from './../images/profile.png';
import homeLogo from './../images/home.png';
import messengerLogo from './../images/messenger.png';
import friendsLogo from './../images/friends.png';
import photoLogo from './../images/gallery.png';
import bookmarkLogo from './../images/bookmark-icon.png';
import likeLogo from './../images/heart-icon.png';
import exitLogo from './../images/log-out.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

function NavIfAuth(props) {
    return (
        <ul className="nav-list">
            <li><NavLink to="/Profile"><img className='sign-in-logo' src={profileLogo}></img><h3 className='sign-in-title'>My Profile</h3></NavLink></li>
            <li><NavLink to="/"><img className='sign-in-logo' src={homeLogo}></img><h3 className='sign-in-title'>Main page</h3></NavLink></li>
            <li><NavLink to="/Messenger"><img className='sign-in-logo' src={messengerLogo}></img><h3 className='sign-in-title'>Messenger</h3></NavLink></li>
            <li><NavLink to="/Friends"><img className='sign-in-logo' src={friendsLogo}></img><h3 className='sign-in-title'>Friends</h3></NavLink></li>
            <li><NavLink to="/Bookmarks"><img className='sign-in-logo' src={bookmarkLogo}></img><h3 className='sign-in-title'>Bookmarks</h3></NavLink></li>
            <li><NavLink to="/Favorites"><img className='sign-in-logo' src={likeLogo}></img><h3 className='sign-in-title'>Favorites</h3></NavLink></li>
            <li className="exit"><NavLink to="/" onClick={() => props.changeButton()}><img className='sign-in-logo' src={exitLogo}></img><h3 className='sign-in-title'>Exit</h3></NavLink></li>
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

// export default NavIfNotAuth;