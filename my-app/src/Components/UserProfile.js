import React from "react";
import NavIfNotAuth from "./NavIfNotAuth.js";
import NavIfAuth from "./NavIfAuth.js";
import { NavLink } from "react-router-dom";

import leftArrow from './../images/left-arrow.png';

import {connect} from "react-redux";

import { changeButton } from './../actions/isLog.action';

import './../css/PageBlock/Profile.css';

import userAvatar from './../images/15.jpg';

import friendIcon from './../images/df-user-icon.png';

import likeIcon from './../images/heart-icon.png';
import commentIcon from './../images/comment-icon.png';
import bookmarkIcon from './../images/bookmark-icon.png';

import likedIcon from './../images/heart-slctd-icon.png';
import bookmarkedIcon from './../images/bookmark-slctd-icon.png';

import authorIcon from './../images/df-user-icon.png';

import attachBtn from './../images/attachments.png';
import closeIcon from './../images/close.png';

function changeLikeBtn(event) {
    let button = event.target;

    let from = button.src.search('/static'); 
    var to = button.src.length;
    let buttonSrc = button.src.substring(from,to);

    if (buttonSrc === likeIcon) {
        button.src = likedIcon;
    } else {
        button.src = likeIcon;
    }
}

function changeBookmarkBtn(event) {
    let button = event.target;

    let from = button.src.search('/static'); 
    var to = button.src.length;
    let buttonSrc = button.src.substring(from,to);

    if (buttonSrc === bookmarkIcon) {
        button.src = bookmarkedIcon;
    } else {
        button.src = bookmarkIcon;
    }
}

function openComments(event) {
    let comments = event.target.closest('li').children[3];

    comments.classList.toggle('display-flex');
}

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
    return (
        <div className="user-block">
            <nav className="nav">
                <ul className="nav-list">
                    {props.isLog.isLog !== true ? <NavIfNotAuth /> : <NavIfAuth />}
                </ul>
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>My profile</h1>
                </div>

                <div className="user-profile">
                    <div className="user-profile-left">
                        <div className="user-avatar">
                            <img src={userAvatar}></img>
                            <button className="edit-btn" onClick={openEditor}>Edit profile</button>
                        </div>
                        <div className="user-nav">
                            <div><NavLink to="/Friends"><h3 className='sign-in-title'>Friends</h3></NavLink></div>
                            <div><NavLink to="/Bookmarks"><h3 className='sign-in-title'>Bookmarks</h3></NavLink></div>
                            <div><NavLink to="/Favorites"><h3 className='sign-in-title'>Favorites</h3></NavLink></div>
                        </div>
                    </div>
                    <div className="user-profile-right">
                        <div className="user-info">
                            <div className="user-name">Name: <span>Sasha</span></div>
                            <div className="user-surname">Surname: <span>Vysoski</span></div>
                            <div className="user-gender">Gender: <span>Male</span></div>
                            <div className="user-birthdate">Birth date: <span>10.09.1998</span></div>
                            <hr/>
                            <div className="user-count">
                                <div className="friends-count"><span className="count">17</span>friends</div>
                                <div className="friends-count"><span className="count">9</span>posts</div>
                                <div className="friends-count"><span className="count">54</span>favorites</div>
                                <div className="friends-count"><span className="count">3</span>bookmarks</div>
                            </div>
                        </div>

                        <div className='title-wrapper'>
                            <h1>My posts:</h1>
                            <button onClick={createPost} className="create-post">Create post</button>
                            <div className="new-post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Sasha Vysotski</h3>
                                </div>
                                <div className="post-content">
                                    <div className="title-name">
                                        <input placeholder="Insert title"></input>
                                    </div>
                                    <div className="content">
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className="post-controllers">
                                    <button className="confirm-btn">Send new post</button>
                                    <button className="attach-btn"><img src={attachBtn}></img><input type="file"></input></button>
                                    <button className="close-btn" onClick={closePost}><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                            </div>
                        </div>

                        <ul className="posts-list">

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Sasha Vysotski</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Artem Kasabuka</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Pasha Motuz</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Ksenia Malishevskaya</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Elena Samoilenko</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Kostya Bykovskih</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Nikita Glinistiy</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>

                            <li className="post">
                                <div className="post-author">
                                    <img className="author-img" src={authorIcon}></img>
                                    <h3>Kirill Yarockiy</h3>
                                    <button className="close-btn"><img className="close-icon" src={closeIcon}></img></button>
                                </div>
                                <div className="post-content">
                                    <h3>Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                                        In in tristique urna.</p>
                                </div>
                                <div className="post-controllers">
                                    <button onClick={changeLikeBtn}><img className="like-icon" src={likeIcon}></img></button>
                                    <button onClick={openComments}><img className="comment-icon" src={commentIcon}></img></button>
                                    <button onClick={changeBookmarkBtn}><img className="bookmark-icon" src={bookmarkIcon}></img></button>
                                </div>
                                <div className="comments">
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-author">
                                                <img className="comment-img" src={authorIcon}></img>
                                                <span>Name</span>
                                            </div>
                                            <div className="comment-content">
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                                dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comments-controllers">
                                        <input placeholder="Insert comment"></input>
                                        <button>Send</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
            <div className="popup">
                <div className="popup-block">
                    <div className="popup-content">
                        <form className="auth-form">
                            <div><input placeholder="Insert email"></input></div>
                            <div><input placeholder="Insert old password"></input></div>
                            <div><input placeholder="Insert new password"></input></div>
                            <div><input placeholder="Confirm new password"></input></div>
                            <div><input placeholder="Insert name"></input></div>
                            <div><input placeholder="Insert surname"></input></div>
                            <div><input placeholder="Select gender"></input></div>
                            <div><input placeholder="Insert birth date"></input></div>
                            <div><input placeholder="Stick a photo"></input></div>
                            <button onClick={closePopup}><NavLink to="/Profile">Confirm edition</NavLink></button>
                        </form>
                    </div>
                    <button className="close-btn" onClick={closePopup}><img className="close-icon" src={closeIcon}></img></button>
                </div>
                <div className="bg"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);