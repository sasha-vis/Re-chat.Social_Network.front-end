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

function Bookmarks(props) {
    return (
        <div className="bookmark-block">
            <nav className="nav">
                <ul className="nav-list">
                    {props.isLog.isLog !== true ? <NavIfNotAuth /> : <NavIfAuth />}
                </ul>
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Bookmarks</h1>
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

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})
  
const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);