import React from "react";

import NavIfNotAuth from "./Common/NavIfNotAuth.js";
import NavIfAuth from "./Common/NavIfAuth.js";

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-list">

                {!localStorage.getItem('token') ? <NavIfNotAuth /> : <NavIfAuth />}
                
            </ul>
        </nav>
    )
}

export default Nav;