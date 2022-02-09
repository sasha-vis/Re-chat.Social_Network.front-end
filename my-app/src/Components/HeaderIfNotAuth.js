import React from "react";
import { NavLink } from 'react-router-dom';

function HeaderIfNotAuth() {
    return (
        <div className='auth-block'>
            <button className='sign-in'><NavLink to="/SignIn"><h3 className='sign-in-title'>Sign In</h3></NavLink></button>
            <button className='sign-up'><NavLink to="/SignUp"><h3 className='sign-up-title'>Sign Up</h3></NavLink></button>
        </div>
    )
}

export default HeaderIfNotAuth;