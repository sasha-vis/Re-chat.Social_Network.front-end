import React from "react";
import NavIfNotAuth from "./NavIfNotAuth.js";
import NavIfAuth from "./NavIfAuth.js";

import likeIcon from './../images/heart-icon.png';
import commentIcon from './../images/comment-icon.png';
import bookmarkIcon from './../images/bookmark-icon.png';

import likedIcon from './../images/heart-slctd-icon.png';
import bookmarkedIcon from './../images/bookmark-slctd-icon.png';

import authorIcon from './../images/df-user-icon.png';

import {connect} from "react-redux";

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

function createPost() {
    
}

function Posts(props){
    return (
        <div className="posts-block">
            <nav className="nav">
                {props.isLog.isLog !== true ? <NavIfNotAuth /> : <NavIfAuth />}
            </nav>
            <main className="main">
                <div className='title-wrapper'>
                    <h1>Posts line</h1>
                    {props.isLog.isLog !== true ? <h3>If you want to create any post, you need to be authorized</h3> : <button onClick={createPost} className="create-post">Create post</button>}
                </div>
                <ul className="posts-list">

                    <li className="post">
                        <div className="post-author">
                            <img className="author-img" src={authorIcon}></img>
                            <h3>Sasha Vysotski</h3>
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

export default connect(mapStateToProps)(Posts);

// export default Posts;