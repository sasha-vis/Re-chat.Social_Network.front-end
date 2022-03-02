import React, {useState} from "react";

import Nav from './../Nav/Nav.js';
import FriendsList from "./Lists/FriendsList.js";
import Input from "../../../Common/Input.js";

import './../../../../css/PageBlock/Friends.css';

function Friends() {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className="friends-block">

            <Nav />
            
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Friends</h1>
                    <hr/>
                    <div className="search-friend">
                        <h3>Search</h3>
                        <Input type="text" value={value} func={handleChange} placeholder="Insert a friend's name" />
                    </div>
                </div>

                <div className="friends">
                    
                    <FriendsList searchValue={value} />

                </div>

            </main>
        </div>
    )
}

export default Friends;