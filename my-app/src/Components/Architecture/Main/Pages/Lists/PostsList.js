import React from "react";

import likeIcon from './../../../../../images/heart-icon.png';
import likedIcon from './../../../../../images/heart-slctd-icon.png';
import commentIcon from './../../../../../images/comment-icon.png';
import bookmarkIcon from './../../../../../images/bookmark-icon.png';
import bookmarkedIcon from './../../../../../images/bookmark-slctd-icon.png';
import authorIcon from './../../../../../images/df-user-icon.png';

import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";

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

function PostsList(props) {
    return (
        <ul className="posts-list">
            <li className="post">
                <div className="post-author">
                    <img className="author-img" src={authorIcon} alt="User"></img>
                    <h3>Sasha Vysotski</h3>
                    {props.dltBtn}
                </div>
                <div className="post-content">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum quam hendrerit,
                        cursus sem vitae, ullamcorper lacus. Cras eu elit leo. Pellentesque at imperdiet dui, sed consectetur risus. 
                        Fusce vitae pulvinar lacus. Pellentesque elementum quis neque nec suscipit. Nunc id dolor egestas, aliquam lorem ac, ultrices sem. 
                        In in tristique urna.</p>
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
        </ul>
    )
}

export default PostsList;