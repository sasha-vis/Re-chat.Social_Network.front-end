import React from "react";

import Nav from './../Nav/Nav.js';
import BookmarksPostsList from './Lists/BookmarksPostsList.js';

import './../../../../css/PageBlock/Profile.css';

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