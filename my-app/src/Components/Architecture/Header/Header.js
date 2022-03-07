import React from "react";

import HeaderIfNotAuth from "./Common/HeaderIfNotAuth.js";
import HeaderIfAuth from "./Common/HeaderIfAuth.js";

import logo from './../../../images/logo2.png';
import './../../../css/Header/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div>
                        <img className='logo' src={logo} alt="logo icon"></img>
                    </div>

                    {!localStorage.getItem('token') ? <HeaderIfNotAuth /> : <HeaderIfAuth />}
                    
                </div>
            </div>
        </header>
    )
}

export default Header;