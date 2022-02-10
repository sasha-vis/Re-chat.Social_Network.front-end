import React from "react";
import NavIfNotAuth from "./NavIfNotAuth.js";
import NavIfAuth from "./NavIfAuth.js";
import { NavLink } from "react-router-dom";

import leftArrow from './../images/left-arrow.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

import './../css/PageBlock/Friends.css';

import authorIcon from './../images/df-user-icon.png';

function Friends(props) {
    return (
        <div className="friends-block">
            <nav className="nav">
                <ul className="nav-list">
                    {props.isLog.isLog !== true ? <NavIfNotAuth /> : <NavIfAuth />}
                </ul>
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Friends</h1>
                    <hr/>
                    <div className="search-friend">
                        <h3>Search</h3>
                        <input placeholder="Insert a friend's name"></input>
                    </div>
                </div>

                <div className="friends">
                    <ul className="friends-list">
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                        <li>
                            <img src={authorIcon}></img>
                            <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                            <div className="friend-controller">
                                <button className="delete-friend">Delete</button>
                                <button className="messege-friend">Send a messege</button>
                            </div>
                        </li>
                    </ul>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Friends);