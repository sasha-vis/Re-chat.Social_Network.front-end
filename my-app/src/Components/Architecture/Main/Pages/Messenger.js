import React from "react";

import Nav from './../Nav/Nav.js';
import Button from "../../../Common/Button.js";

import './../../../../css/PageBlock/Messenger.css';

import leftArrow from './../../../../images/left-arrow.png';
import authorIcon from './../../../../images/df-user-icon.png';
import sendBtn from './../../../../images/send-message.png';

function Messenger() {
    return (
        <div className="messenger-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Messenger</h1>
                </div>

                <div className="messenger">
                    <div className="messenger-left">
                        <div className="messages-list">
                            <ul className="messages">
                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>

                                <li className="message">
                                    <img className="message-img" src={authorIcon} alt="User"></img>
                                    <div className="message-item">
                                        <h3 className="message-user-name">Konstantin</h3>
                                        <div className="message-content">Hi, what's up?</div>    
                                    </div>
                                    <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="messenger-right">
                        <div className="current-message-block">
                            <div className="current-message">
                                <div className="message-header">
                                    <h3><span className="user-name">Konstantin</span><span className="user-surname">Bykovskih</span></h3>
                                    <img src={authorIcon} alt="User"></img>
                                </div>

                                <div className="all-message-content">
                                    <ul className="message-list">
                                        <li className="current-message-item">
                                            <img src={authorIcon} alt="User"></img>
                                            <div className="message-item-content">
                                                <h3>Konstantin</h3>
                                                <p>Hi, what's up?</p>
                                                <div className="message-date">12:23</div>
                                            </div>
                                        </li>

                                        <li className="current-message-item">
                                            <img src={authorIcon} alt="User"></img>
                                            <div className="message-item-content">
                                                <h3>Konstantin</h3>
                                                <p>Hi, what's up?</p>
                                                <div className="message-date">12:23</div>
                                            </div>
                                        </li>

                                        <li className="current-message-item">
                                            <img src={authorIcon} alt="User"></img>
                                            <div className="message-item-content">
                                                <h3>Konstantin</h3>
                                                <p>Hi, what's up?</p>
                                                <div className="message-date">12:23</div>
                                            </div>
                                        </li>

                                        <li className="current-message-item">
                                            <img src={authorIcon} alt="User"></img>
                                            <div className="message-item-content">
                                                <h3>Konstantin</h3>
                                                <p>Hi, what's up?</p>
                                                <div className="message-date">12:23</div>
                                            </div>
                                        </li>

                                        <li className="current-message-item">
                                            <img src={authorIcon} alt="User"></img>
                                            <div className="message-item-content">
                                                <h3>Konstantin</h3>
                                                <p>Hi, what's up?</p>
                                                <div className="message-date">12:23</div>
                                            </div>
                                        </li>

                                        <li className="current-message-item">
                                            <img src={authorIcon} alt="User"></img>
                                            <div className="message-item-content">
                                                <h3>Konstantin</h3>
                                                <p>Hi, what's up?</p>
                                                <div className="message-date">12:23</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="message-controller">
                                    <input placeholder="Insert a message"></input>

                                    <Button innerHTML={<img src={sendBtn} alt="Send icon"></img>} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Messenger;