import React from "react";
import { Route, Routes } from 'react-router-dom';

import './../css/PageBlock/PageBlock.css';

import Posts from "./Posts.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
// import signInLogo from './../images/sign-in-icon.png';
// import signUpLogo from './../images/sign-up-icon.png';

function PageBlock() {
    return (
        <div className="page-block">
            <div className="container">
                <div className="page-block-wrapper">
                    <Routes>
                        <Route exact path="/" element={<Posts />} />
                        <Route exact path="/SignUp" element={<SignUp />} />
                        <Route exact path="/SignIn" element={<SignIn />} />
                        {/* <Route exact path="/Profile" element={<Profile />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default PageBlock;