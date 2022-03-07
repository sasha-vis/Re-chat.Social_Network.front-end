import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import authorIcon from './../../../../../images/df-user-icon.png';

import Button from "../../../../Common/Button";

import {connect} from "react-redux";
import { getUsersData, getUserData } from "../../../../../actions/user.action";
import { getRequestsData } from "../../../../../actions/requestsForFriendship.action";
import { getFriendsData } from "../../../../../actions/friends.action";

function FriendsList(props) {

    useEffect(function(){
        getRequestsData();
        getFriendsData();
        getUsersData();
    }, []);

    async function getUsersData() {
        props.getUsersData()
    }

    async function getRequestsData() {
        props.getRequestsData()
    }
    
    async function getFriendsData() {
        props.getFriendsData()
    }

    async function getUserData() {
        props.getUserData()
    }

    async function sendRequest(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Friend", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getUsersData();
        getRequestsData();
    }
    async function confirmRequest(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Friend/ResponseToRequestFriend", {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getUsersData();
        getRequestsData();
        getFriendsData();
        getUserData();
    }
    async function refuseRequest(data) {
        console.log(data)
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Friend", {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getUsersData();
        getRequestsData();
        getFriendsData();
        getUserData();
    }

    function setButton(isFriend, data) {
        if(isFriend == 0){
            return <Button onClick={() => sendRequest({"friendId": data.friendId})} className="send-request" innerHTML="Add to friends" />
        } else if (isFriend == 1) {
            return <Button className="sended-request" disabled="disabled" innerHTML="Request sended" />
        } else if (isFriend == 2) {
            return <Button className="sended-request" disabled="disabled" innerHTML="User sent you a request" />
        }
    }

    return (
        <div>
            {props.requests != 0 ?
                (props.requests.requestsForFriendship.data.length != 0 ? 
                    <ul className="friends-list">
                        <h3>Friend requests:</h3>
                    {props.requests.requestsForFriendship.data.map((item, index) =>
                        item.name.toLowerCase().includes(props.searchValue.toLowerCase()) === true || item.surname.toLowerCase().includes(props.searchValue.toLowerCase()) === true ? 
                            <li className="request" key={index}>
                                <img src={authorIcon} alt="User"></img>
                                <h3><span className="friend-name">{item.name}</span><span className="friend-surname">{item.surname}</span></h3>
                                <div className="friend-controller">
                                    <Button onClick={() => refuseRequest({"friendId": item.userId})} className="refuse-request" innerHTML="Refuse request" />
                                    <Button onClick={() => confirmRequest({"userId": item.userId})} className="confirm-request" innerHTML="Confrim request" />
                                </div>
                            </li> : '')}
                </ul> : '') : ''
            }
            {props.friends != 0 ?
                (props.friends.friends.data.length != 0 ? 
                    <ul className="friends-list">
                        <h3>Your friends:</h3>
                    {props.friends.friends.data.map((item, index) => 
                        item.name.toLowerCase().includes(props.searchValue.toLowerCase()) === true || item.surname.toLowerCase().includes(props.searchValue.toLowerCase()) === true ?
                            <li className="friend" key={index}>
                                <img src={authorIcon} alt="User"></img>
                                <h3><span className="friend-name">{item.name}</span><span className="friend-surname">{item.surname}</span></h3>
                                <div className="friend-controller">
                                    <Button onClick={() => refuseRequest({"friendId": item.friendId})} className="refuse-request" innerHTML="Delete friend" />
                                    <Button className="send-message" innerHTML={<NavLink to={`/Messenger/${index}`}>Send a message</NavLink>} />
                                </div>
                            </li> : '')}
                </ul> : <div className="no-friends">You don't have any friend. To start chat, add new friend below</div>) : ''
            }
            {props.users != 0 && props.user != 0 ?
                <ul className="friends-list">
                    <h3>Find new friends:</h3>
                {props.users.users.data.map((item, index) => 
                    item.name.toLowerCase().includes(props.searchValue.toLowerCase()) === true || item.surname.toLowerCase().includes(props.searchValue.toLowerCase()) === true ?
                        <li className="post" key={index}>
                            <img src={authorIcon} alt="User"></img>
                            <h3><span className="friend-name">{item.name}</span><span className="friend-surname">{item.surname}</span></h3>
                            <div className="friend-controller">
                                {setButton(item.isFriend, {"friendId": item.userId})}
                            </div>
                        </li> : '')}
                </ul> : ''}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users,
    requests: state.requestsForFriendship,
    user: state.user,
    friends: state.friends
})

const mapDispatchToProps = (dispatch) => ({
    getUsersData: () => dispatch(getUsersData()),
    getRequestsData: () => dispatch(getRequestsData()),
    getFriendsData: () => dispatch(getFriendsData()),
    getUserData: () => dispatch(getUserData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);