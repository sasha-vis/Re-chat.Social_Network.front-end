import React from "react";

// import Nav from './../Nav/Nav.js';
// import FavoritesPostsList from './Lists/FavoritesPostsList.js';
// import Button from "./../../../Common/Button.js";

// import './../../../../css/PageBlock/Profile.css';

// import closeIcon from './../../../../images/close.png';

function AuthEdit() {
    return (
        <div className="edit-content">
            <h3>Authentication:</h3>
            <form>
                <div>Email:<input placeholder="Email"></input></div>
                <div>Old password:<input placeholder="Old password"></input></div>
                <div>New password:<input placeholder="New password"></input></div>
                <div>Confirm new password:<input placeholder="Confirm new password"></input></div>
                <button>Send</button>
            </form>
        </div>
    )
}

export default AuthEdit;