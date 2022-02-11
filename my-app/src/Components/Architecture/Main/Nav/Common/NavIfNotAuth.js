import React from "react";
import { NavLink } from 'react-router-dom';

import signInLogo from './../../../../../images/sign-in-icon.png';
import signUpLogo from './../../../../../images/sign-up-icon.png';

function NavIfNotAuth() {
    return (
        <ul className="nav-list">
            <li><NavLink to="/SignIn"><img className='sign-in-logo' src={signInLogo} alt="sign in icon"></img><h3 className='sign-in-title'>Sign In</h3></NavLink></li>
            <li><NavLink to="/SignUp"><img className='sign-up-logo' src={signUpLogo} alt="sign up icon"></img><h3 className='sign-up-title'>Sign Up</h3></NavLink></li>
        </ul>
    )
}

export default NavIfNotAuth;