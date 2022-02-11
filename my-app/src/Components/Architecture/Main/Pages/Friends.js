import React from "react";

import Nav from './../Nav/Nav.js';
import FriendsList from "./Lists/FriendsList.js";
import Input from "../../../Common/Input.js";

import './../../../../css/PageBlock/Friends.css';

function Friends() {
    return (
        <div className="friends-block">

            <Nav />
            
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Friends</h1>
                    <hr/>
                    <div className="search-friend">
                        <h3>Search</h3>
                        <Input placeholder="Insert a friend's name" />
                    </div>
                </div>

                <div className="friends">
                    
                    <FriendsList />

                </div>

            </main>
        </div>
    )
}

export default Friends;