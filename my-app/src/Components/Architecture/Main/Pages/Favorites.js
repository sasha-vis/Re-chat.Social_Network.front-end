import React from "react";

import Nav from './../Nav/Nav.js';
import FavoritesPostsList from './Lists/FavoritesPostsList.js';

import './../../../../css/PageBlock/Profile.css';

function Favorites() {
    return (
        <div className="favorites-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Favorites</h1>
                </div>

                <FavoritesPostsList />

            </main>
        </div>
    )
}

export default Favorites;