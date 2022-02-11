import React from "react";

import Nav from './../Nav/Nav.js';
import PostsList from './Lists/PostsList.js';
import Button from "../../../Common/Button.js";

import './../../../../css/PageBlock/Profile.css';

import closeIcon from './../../../../images/close.png';

function Bookmarks() {
    return (
        <div className="bookmark-block">

            <Nav />
            
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Bookmarks</h1>
                </div>

                <PostsList dltBtn={<Button className="close-btn" innerHTML={<img className="close-icon" src={closeIcon} alt="Close icon"></img>} />} />

            </main>
        </div>
    )
}

export default Bookmarks;