import React from "react";

import HeaderIfNotAuth from "./HeaderIfNotAuth.js";
import HeaderIfAuth from "./HeaderIfAuth.js";

import logo from './../images/logo.png';
import './../css/Header/Header.css';

import {connect} from "react-redux";

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div>
                        <img className='logo' src={logo}></img>
                    </div>
                    {props.isLog.isLog !== true ? <HeaderIfNotAuth /> : <HeaderIfAuth />}
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})

export default connect(mapStateToProps)(Header);
// export default Header;