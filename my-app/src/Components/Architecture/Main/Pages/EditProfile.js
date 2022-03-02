import React, { useEffect } from "react";

import Nav from "../Nav/Nav";

import {connect} from "react-redux";

import {getUserData} from "./../../../../actions/user.action"

import leftArrow from './../../../../images/left-arrow.png';

import { NavLink } from "react-router-dom";

import { Route, Routes } from 'react-router-dom';

import PrivateRoute from "../../../Hoc/PrivateRoute";

import CommonEdit from "./Edit/CommonEdit";
import AuthEdit from "./Edit/AuthEdit";
import ConfEdit from "./Edit/ConfEdit";

function EditProfile(props) {
    useEffect(function(){
        getUserData();
    }, []);

    async function getUserData() {
        props.getUserData()
    }

    return (
        <div className="user-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>
                        <NavLink to='/Profile'><img src={leftArrow}></img>Back to profile</NavLink>
                    </h1>
                </div>

                {(props.user != 0 && props.myPosts != 0) ?
                <div className="user-profile">
                    <div className="user-profile-edit">

                        <div className='user-profile-nav' id="posts">
                            <ul className="nav-list-edit">
                                <li><NavLink to='/EditProfile'>General</NavLink></li>
                                <li><NavLink to='/EditProfile/AuthEdit'>Authentication</NavLink></li>
                                <li><NavLink to='/EditProfile/ConfEdit'>Confidential</NavLink></li>
                            </ul>
                        </div>

                        <div className="edit-block">
                            <Routes>
                                <Route exact path="/*" element={<PrivateRoute><CommonEdit user={props.user} /></PrivateRoute>} />
                                <Route exact path="/AuthEdit" element={<PrivateRoute><AuthEdit user={props.user} /></PrivateRoute>} />
                                <Route exact path="/ConfEdit" element={<PrivateRoute><ConfEdit user={props.user} /></PrivateRoute>} />
                            </Routes>
                        </div>

                    </div>
                </div> 
                : 
                <div>User is not found</div>}

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})
  
const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);