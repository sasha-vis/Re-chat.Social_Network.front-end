import React from "react";

import authorIcon from './../../../../../images/df-user-icon.png';

import Button from "../../../../Common/Button";

function FriendsList() {
    return (
        <ul className="friends-list">
            <li>
                <img src={authorIcon} alt="User"></img>
                <h3><span className="friend-name">Artem</span><span className="friend-surname">Kasabuka</span></h3>
                <div className="friend-controller">
                    <Button className="delete-friend" innerHTML="Delete" />
                    <Button className="messege-friend" innerHTML="Send a messege" />
                </div>
            </li>
        </ul>
    )
}

export default FriendsList;