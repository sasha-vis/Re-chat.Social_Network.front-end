import React,{ useEffect } from "react";

import Nav from './../Nav/Nav.js';
import Button from "../../../Common/Button.js";

import './../../../../css/PageBlock/Messenger.css';

import leftArrow from './../../../../images/left-arrow.png';
import authorIcon from './../../../../images/df-user-icon.png';
import sendBtn from './../../../../images/send-message.png';

import {connect} from "react-redux";
import { getFriendsData } from "../../../../actions/friends.action";

function Messenger(props) {
    useEffect(function(){
        getFriendsData();
    }, []);
    
    async function getFriendsData() {
        props.getFriendsData()
    }

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
                            {props.friends != 0 ?
                                <ul className="messages">
                                    {props.friends.friends.data.map((item, index) =>
                                    <li className="message" key={index}>
                                        {console.log(item)}
                                        <img className="message-img" src={authorIcon} alt="User"></img>
                                        <div className="message-item">
                                            <h3 className="message-user-name">{item.name} {item.surname}</h3>
                                            <div className="message-content">
                                                <h5>{item.messages[item.messages.length - 1].userName} {item.messages[item.messages.length - 1].userSurname}</h5>
                                                <div>{item.messages[item.messages.length - 1].messageText}  </div>  
                                            </div>    
                                        </div>
                                        <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>    
                                    </li>)}
                                </ul>    
                           : <div className="no-friends">You don't have any chats. To start chat, add new friend below</div>}
                        </div>
                    </div>
                    <div className="messenger-right">
                        <div className="current-message-block">
                            <div className="current-message">
                                <div className="message-header">
                                    <h3><span className="user-name">Konstantin</span><span className="user-surname">Bykovskih</span></h3>
                                    <img src={authorIcon} alt="User"></img>
                                </div>

                                {/* Надо засунуть нижний мап в верхний что бы указывать индекс для нужного блока сообщений */}

                                <div className="all-message-content">
                                    {props.friends != 0 ?
                                        <ul className="message-list">
                                            {console.log(props.friends)}
                                            {/* {props.friends.friends.data.messages.map((item, index) =>
                                            <li className="current-message-item" key={index}>
                                                <img src={authorIcon} alt="User"></img>
                                                <div className="message-item-content">
                                                    <h3>{item.userName}</h3>
                                                    <p>{item.messageText}</p>
                                                    <div className="message-date">{item.messageDate}</div>
                                                </div>
                                            </li>)} */}
                                        </ul>   
                                    : <div className="no-friends">You don't have any messages. To start chat, send new message</div>}
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

const mapStateToProps = (state) => ({
    friends: state.friends
})

const mapDispatchToProps = (dispatch) => ({
    getFriendsData: () => dispatch(getFriendsData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Messenger);