import React,{ useEffect } from "react";

import Nav from './../Nav/Nav.js';

import './../../../../css/PageBlock/Messenger.css';

import leftArrow from './../../../../images/left-arrow.png';
import authorIcon from './../../../../images/df-user-icon.png';

import {connect} from "react-redux";
import { getFriendsData } from "../../../../actions/friends.action";

import { NavLink } from "react-router-dom";

import { Route, Routes } from 'react-router-dom';

import PrivateRoute from "../../../Hoc/PrivateRoute.js";

import CurrentMessagesList from "./Lists/CurrentMessagesList.js";

function Messenger(props) {
    useEffect(function(){
        getFriendsData();
    }, []);
    
    async function getFriendsData() {
        props.getFriendsData()
    }

    function setClass(id) {
        let currentId = props.user.user.data.id;

        if (currentId === id) {
            return "my-message-content";
        } else {
            return "";
        }
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
                            {props.friends != 0 && props.user != 0 ?
                                props.friends.friends.data.length != 0 ?
                                <ul className="messages">
                                    {props.friends.friends.data.map((item, index) =>
                                    <li className="message" key={index}>
                                        <NavLink to={`/Messenger/${index}`}>
                                            <img className="message-img" src={authorIcon} alt="User"></img>
                                            <div className="message-item">
                                                <h3 className="message-user-name">{item.name} {item.surname}</h3>
                                                {item.messages.length != 0 ?
                                                <div className={`message-content ${setClass(item.messages[item.messages.length - 1].authorId)}`}>
                                                    <h5>{item.messages[item.messages.length - 1].authorId === props.user.user.data.id ? "You:" : `${item.messages[item.messages.length - 1].userName}:`}</h5>
                                                    <div>{item.messages[item.messages.length - 1].messageText}  </div>  
                                                </div> : <div className="message-content no-chat">Start chat</div>   
                                                }    
                                            </div>
                                            <img className="open-msg-btn" src={leftArrow} alt="Arrow icon"></img>
                                        </NavLink>  
                                    </li>)}
                                </ul> :  <div className="no-friends"><NavLink to="/Friends">You don't have any chats. To start chat, add new friends</NavLink></div>   
                           : <div className="no-friends"><NavLink to="/Friends">You don't have any chats. To start chat, add new friends</NavLink></div>}
                        </div>
                    </div>
                    <div className="messenger-right">
                        <div className="current-message-block">
                            {props.friends != 0 ?
                                props.friends.friends.data.length != 0 ?
                                <Routes>
                                    <Route exact path="/*" element={<PrivateRoute><CurrentMessagesList friend={props.friends.friends.data[0]} /></PrivateRoute>} />
                                     {props.friends.friends.data.map((item, index) =>
                                        <Route exact path={`/${index}`} key={index} element={<PrivateRoute><CurrentMessagesList friend={item} /></PrivateRoute>} />
                                    )}
                                </Routes> : <div className="no-friends"><NavLink to="/Friends">You don't have any messages. To start chat, add new friends</NavLink></div>
                            : <div className="no-friends"><NavLink to="/Friends">You don't have any messages. To start chat, add new friends</NavLink></div>}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    friends: state.friends
})

const mapDispatchToProps = (dispatch) => ({
    getFriendsData: () => dispatch(getFriendsData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Messenger);