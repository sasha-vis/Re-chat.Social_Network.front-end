import React from "react";
import {connect} from "react-redux";

import HeaderIfNotAuth from "./Common/HeaderIfNotAuth.js";
import HeaderIfAuth from "./Common/HeaderIfAuth.js";

import logo from './../../../images/logo.png';
import './../../../css/Header/Header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div>
                        <img className='logo' src={logo} alt="logo icon"></img>
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