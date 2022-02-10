import React from "react";
import NavIfNotAuth from "./NavIfNotAuth.js";
import NavIfAuth from "./NavIfAuth.js";
import { NavLink } from "react-router-dom";

import leftArrow from './../images/left-arrow.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

import './../css/PageBlock/Messenger.css';

function Messenger(props) {
    return (
        <div className="messenger-block">
            <nav className="nav">
                <ul className="nav-list">
                    {props.isLog.isLog !== true ? <NavIfNotAuth /> : <NavIfAuth />}
                </ul>
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Messenger</h1>
                </div>

                <div className="messenger">
                    <div className="messenger-left">
                        <ul className="messages">

                        </ul>
                    </div>
                    <div className="messenger-right">
                        <div className="user-info">

                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Messenger);