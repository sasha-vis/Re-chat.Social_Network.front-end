import React from "react";
import { Route, Routes } from 'react-router-dom';

import './../../../css/PageBlock/PageBlock.css';

import Posts from "./Pages/Posts.js";
import SignUp from "./Pages/SignUp.js";
import SignIn from "./Pages/SignIn.js";
import UserProfile from "./Pages/UserProfile";
import Messenger from "./Pages/Messenger";
import Friends from "./Pages/Friends";
import Bookmarks from "./Pages/Bookmarks";
import Favorites from "./Pages/Favorites";

import PrivateRoute from "./../../Hoc/PrivateRoute.js";
import AuthorizedPrivateRoute from "../../Hoc/AuthorizedPrivateRoute";
import EditProfile from "./Pages/EditProfile";

function Main() {
    return (
        <div className="page-block">
            <div className="container">
                <div className="page-block-wrapper">

                    <Routes>
                        <Route exact path="/" element={<Posts />} />
                        <Route exact path="*" element={<Posts />} />
                        <Route exact path="/SignUp" element={<AuthorizedPrivateRoute><SignUp /></AuthorizedPrivateRoute>} />
                        <Route exact path="/SignIn" element={<AuthorizedPrivateRoute><SignIn /></AuthorizedPrivateRoute>} />
                        <Route exact path="/Profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                        <Route exact path="/Messenger/*" element={<PrivateRoute><Messenger /></PrivateRoute>} />
                        <Route exact path="/Friends" element={<PrivateRoute><Friends /></PrivateRoute>} />
                        <Route exact path="/Bookmarks" element={<PrivateRoute><Bookmarks /></PrivateRoute>} />
                        <Route exact path="/Favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
                        <Route exact path="/EditProfile/*" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Main;