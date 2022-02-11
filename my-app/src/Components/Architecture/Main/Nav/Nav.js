import React from "react";
import {connect} from "react-redux";

import NavIfNotAuth from "./Common/NavIfNotAuth.js";
import NavIfAuth from "./Common/NavIfAuth.js";

function Nav(props) {
    return (
        <nav className="nav">
            <ul className="nav-list">

                {props.isLog.isLog !== true ? <NavIfNotAuth /> : <NavIfAuth />}
                
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})

export default connect(mapStateToProps)(Nav);