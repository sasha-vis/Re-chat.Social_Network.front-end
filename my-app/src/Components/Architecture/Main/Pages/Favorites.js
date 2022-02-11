import React from "react";

import Nav from './../Nav/Nav.js';
import PostsList from './Lists/PostsList.js';
import Button from "./../../../Common/Button.js";

import './../../../../css/PageBlock/Profile.css';

import closeIcon from './../../../../images/close.png';

function Favorites() {
    return (
        <div className="favorites-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Favorites</h1>
                </div>

                <PostsList dltBtn={<Button className="close-btn" innerHTML={<img className="close-icon" src={closeIcon} alt="Close icon"></img>} />} />

            </main>
        </div>
    )
}

export default Favorites;