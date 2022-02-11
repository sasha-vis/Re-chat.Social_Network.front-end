import React from "react";
import { NavLink } from 'react-router-dom';

import Button from "../../../Common/Button";

function HeaderIfNotAuth() {
    return (
        <div className='auth-block'>
            
            <Button className='sign-in' innerHTML={<NavLink to="/SignIn"><h3 className='sign-in-title'>Sign In</h3></NavLink>}></Button>
            <Button className='sign-up' innerHTML={<NavLink to="/SignUp"><h3 className='sign-up-title'>Sign Up</h3></NavLink>}></Button>
            
        </div>
    )
}

export default HeaderIfNotAuth;