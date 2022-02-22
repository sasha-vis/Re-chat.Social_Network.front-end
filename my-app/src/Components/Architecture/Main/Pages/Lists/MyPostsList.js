import React,{useState, useEffect} from "react";

import likeIcon from './../../../../../images/heart-icon.png';
import likedIcon from './../../../../../images/heart-slctd-icon.png';
import commentIcon from './../../../../../images/comment-icon.png';
import bookmarkIcon from './../../../../../images/bookmark-icon.png';
import bookmarkedIcon from './../../../../../images/bookmark-slctd-icon.png';
import authorIcon from './../../../../../images/df-user-icon.png';
import closeIcon from './../../../../../images/close.png';

import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";

import {connect} from "react-redux";
import { deletePost } from './../../../../../actions/posts.action';

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

function MyPostsList(props) {

    return (
        <ul className="posts-list">
            {props.myPosts != 0 ?
                props.myPosts.myPosts.data.map((item, index) => 
                    <li className="post" key={index} data-id={item.id}>
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3><span>{item.userName}</span> <span>{item.userSurname}</span></h3>
                            <Button className="close-btn" onClick={() => props.deletePost({index: item.id})} innerHTML={<img className="close-icon" src={closeIcon} alt="Close-icon"></img>} />
                        </div>
                        <div className="post-content">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                        <div className="post-controllers">
                            <Button onClick={changeLikeBtn} innerHTML={<img className="like-icon" src={likeIcon} alt="Like icon"></img>} />
                            <Button onClick={openComments} innerHTML={<img className="comment-icon" src={commentIcon} alt="Comment icon"></img>} />
                            <Button onClick={changeBookmarkBtn} innerHTML={<img className="bookmark-icon" src={bookmarkIcon} alt="Bookmark icon"></img>} />
                        </div>
                        <div className="comments">
                            <ul className="comments-list">
                                <li>
                                    <div className="comment-author">
                                        <img className="comment-img" src={authorIcon} alt="User"></img>
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
                                        <img className="comment-img" src={authorIcon} alt="User"></img>
                                        <span>Name</span>
                                    </div>
                                    <div className="comment-content">
                                        dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                        dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                                    </div>
                                </li>
                                <li>
                                    <div className="comment-author">
                                        <img className="comment-img" src={authorIcon} alt="User"></img>
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
                                <Input placeholder="Insert comment" />
                                <Button innerHTML="Send" />
                            </div>
                        </div>
                    </li>
                ) : ''}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog,
    myPosts: state.myPosts
})

const mapDispatchToProps = (dispatch) => ({
    deletePost: (data) => dispatch(deletePost(data))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(MyPostsList);