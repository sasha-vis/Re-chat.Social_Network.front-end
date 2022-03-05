import React, { useState, useEffect } from "react";

// import Nav from './../Nav/Nav.js';
// import FavoritesPostsList from './Lists/FavoritesPostsList.js';
// import Button from "./../../../Common/Button.js";

// import './../../../../css/PageBlock/Profile.css';

// import closeIcon from './../../../../images/close.png';

import { getFriendsData } from "../../../../../actions/friends.action";
import {connect} from "react-redux";

import authorIcon from './../../../../../images/df-user-icon.png';

import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";

import sendBtn from "./../../../../../images/send-message.png";

function CurrentMessagesList(props) {
    // const [checkbox, setCheckbox] = useState(props.user.user.data.excludeFromSearch);

    // function changeCheckbox(event) {
        
    //     if (event.target.defaultChecked === false)
    //     {
    //         setCheckbox(true);
    //     } else {
    //         setCheckbox(false);
    //     }
    // }

    // useEffect(function(){
    //     getUserData();
    // }, []);

    // async function getUserData() {
    //     props.getUserData()
    // }

    const [messageText, setMessageText] = useState('');

    function handleChangeMessage(event) {
        setMessageText(event.target.value);
    }

    async function sendNewMessage(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Message", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getFriendsData();
        setMessageText('');
    }

    useEffect(function(){
        getFriendsData();
    }, []);
    
    async function getFriendsData() {
        props.getFriendsData()
    }

    function setClass(id) {
        let currentId = JSON.parse(localStorage.getItem('user')).data.id;

        if (currentId === id) {
            return "my-message";
        } else {
            return "";
        }
    }

    return (
        <div className="current-message">
            {props.friend != undefined ?
                <div className="current-message-wrapper">
                <div className="message-header">
                    <h3><span className="user-name">{props.friend != undefined ? props.friend.name : ''}</span><span className="user-surname">{props.friend != undefined ? props.friend.surname : ''}</span></h3>
                    <img src={authorIcon} alt="User"></img>
                </div>

                <div className="all-message-content">
                    {props.friends != 0 ?
                        <ul className="message-list">
                            {props.friend != undefined && props.friend.messages != 0 ? 
                                props.friend.messages.map((item, index) =>
                                    <li className={`current-message-item ${setClass(item.authorId)}`} key={index}>
                                        <img src={authorIcon} alt="User"></img>
                                        <div className="message-item-content">
                                            <h3>{item.userName}</h3>
                                            <p>{item.messageText}</p>
                                            <div className="message-date"><span className="date">{item.messageDate.substr(0, 10)}</span><span className="time">{item.messageDate.substr(11, 5)}</span></div>
                                        </div>
                                    </li>)
                            : <div className="no-messages">You don't have any messages. To start chat, send new message</div>
                        }
                        </ul>   
                    : <div className="no-friends">You don't have any messages. To start chat, send new message</div>}
                </div>

                <div className="message-controller">

                    <Input type={"text"} value={messageText} func={handleChangeMessage} placeholder="Insert a message" />

                    <Button onClick={() => sendNewMessage({"friendListId": props.friend.id, "messageText": messageText})} innerHTML={<img src={sendBtn} alt="Send icon"></img>} />

                </div>
            </div> : <div>You don't have any friends. To start chat, add new friend</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    friends: state.friends
})

const mapDispatchToProps = (dispatch) => ({
    getFriendsData: () => dispatch(getFriendsData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrentMessagesList);