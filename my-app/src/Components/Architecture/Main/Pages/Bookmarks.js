import React from "react";

import Nav from './../Nav/Nav.js';
import PostsList from './Lists/PostsList.js';
import Button from "../../../Common/Button.js";
import BookmarksPostsList from './Lists/BookmarksPostsList.js';

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

                <BookmarksPostsList />

            </main>
        </div>
    )
}

export default Bookmarks;