import React from "react";
import { NavLink } from 'react-router-dom';

import leftArrow from './../../../../../images/left-arrow.png';

function NavForAuth() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li><NavLink to="/"><img className='sign-in-logo' src={leftArrow} alt="arrow icon"></img><h3 className='sign-in-title'>Main page</h3></NavLink></li>
            </ul>
        </nav>
    )
}

export default NavForAuth;