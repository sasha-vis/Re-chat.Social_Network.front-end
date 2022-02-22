import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import Nav from './../Nav/Nav.js';
import MyPostsList from "./Lists/MyPostsList.js";
import Button from "./../../../Common/Button.js";
import Input from "../../../Common/Input.js";

import './../../../../css/PageBlock/Profile.css';

import authorIcon from './../../../../images/df-user-icon.png';
import attachBtn from './../../../../images/attachments.png';
import closeIcon from './../../../../images/close.png';

import { getData } from './../../../../actions/user.action';
import { getMyPostsData } from './../../../../actions/myPosts.action';
import {connect} from "react-redux";



function createPost(event) {
    let newPost = event.target.closest('div').children[2];

    newPost.classList.toggle('display-block');
}

function closePost(event) {
    let closeBtn = event.target.closest('.new-post');

    closeBtn.classList.remove('display-block');
}

function openEditor(event) {
    let userBlock = event.target.closest('.user-block').children[2];

    userBlock.classList.toggle('display-block');
}

function closePopup(event) {
    let closeBtn = event.target.closest('.popup');

    closeBtn.classList.remove('display-block');
}



function UserProfile(props) {

    useEffect(function(){
        getUserData();
        getMyPostsData();
    }, []);

    async function getUserData() {
        props.getData()
    }
    async function getMyPostsData() {
        props.getMyPostsData()
    }

    return (
        <div className="user-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>My profile</h1>
                </div>

                {props.user != 0 ?
                <div className="user-profile">
                <div className="user-profile-left">
                    <div className="user-avatar">
                        <img src={authorIcon} alt="User"></img>
                        <Button className="edit-btn" onClick={openEditor} innerHTML="Edit profile" />
                    </div>
                </div>
                <div className="user-profile-right">
                    <div className="user-info">
                        <div className="user-name">Name: <span>{props.user.user.data.name}</span></div>
                        <div className="user-surname">Surname: <span>{props.user.user.data.surname}</span></div>
                        <div className="user-gender">Gender: <span>{props.user.user.data.gender}</span></div>
                        <div className="user-birthdate">Birth date: <span>{props.user.user.data.birthdayDate}</span></div>
                        <hr/>
                        <div className="user-count">
                            <div className="friends-count"><NavLink to='/Friends'><span className="count">17</span>friends</NavLink></div>
                            <div className="friends-count"><a href="#posts"><span className="count">9</span>posts</a></div>
                            <div className="friends-count"><NavLink to='/Favorites'><span className="count">54</span>favorites</NavLink></div>
                            <div className="friends-count"><NavLink to='/Bookmarks'><span className="count">3</span>bookmarks</NavLink></div>
                        </div>
                    </div>

                    <div className='title-wrapper' id="posts">
                        <h1>My posts:</h1>

                        <Button onClick={createPost} className="create-post" innerHTML="Create post" />

                        <div className="new-post">
                            <div className="post-author">
                                <img className="author-img" src={authorIcon} alt="User"></img>
                                <h3>Sasha Vysotski</h3>
                            </div>
                            <div className="post-content">
                                <div className="title-name">
                                    <Input placeholder="Insert title" />
                                </div>
                                <div className="content">
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="post-controllers">
                                <Button className="confirm-btn" innerHTML="Send new post" />
                                <Button className="attach-btn"innerHTML={<><img src={attachBtn} alt="Attach icon"></img><Input type="file" /></>} />
                                <Button className="close-btn" onClick={closePost} innerHTML={<img className="close-icon" src={closeIcon} alt="Close icon"></img>} />
                            </div>
                        </div>
                    </div>

                    <MyPostsList />

                </div>
            </div> : <div>User is not found</div>}

            </main>
            <div className="popup">
                <div className="popup-block">
                    <div className="popup-content">
                        <form className="auth-form">
                            <div><Input placeholder="Insert email" /></div>
                            <div><Input placeholder="Insert old password" /></div>
                            <div><Input placeholder="Insert new password" /></div>
                            <div><Input placeholder="Confirm new password" /></div>
                            <div><Input placeholder="Insert name" /></div>
                            <div><Input placeholder="Insert surname" /></div>
                            <div><Input placeholder="Select gender" /></div>
                            <div><Input placeholder="Insert birth date" /></div>
                            <div><Input placeholder="Stick a photo" /></div>
                            <Button onClick={closePopup} innerHTML={<NavLink to="/Profile">Confirm edition</NavLink>} />
                        </form>
                    </div>
                    <Button className="close-btn" onClick={closePopup} innerHTML={<img className="close-icon" src={closeIcon} alt="Close icon"></img>} />
                </div>
                <div className="bg"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})
  
const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData()),
    getMyPostsData: () => dispatch(getMyPostsData())
    // getData: (data) => dispatch(getData(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);