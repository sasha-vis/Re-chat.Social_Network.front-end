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
import { getMyPostsData } from "../../../../../actions/myPosts.action";
import { getUserData } from "../../../../../actions/user.action";

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

    useEffect(function(){
        getMyPostsData();
    }, []);

    async function getMyPostsData() {
        props.getMyPostsData()
    }
    async function getUserData() {
        props.getUserData()
    }

    async function changeLikeBtn(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Like", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getMyPostsData();
        getUserData();
    }

    function setPhoto(item) {
        let result;
        if (item.likes.length != 0) {
            item.likes.forEach(function(itemLike, index) {
                let likeUserId = itemLike.userId;
                let userId = JSON.parse(localStorage.getItem('user')).data.id;

                if (likeUserId === userId) {
                    result = likedIcon
                } else {
                    result = likeIcon
                }
            })
        } else {
            result = likeIcon
        }
        return result;
    }

    const [commentText, setCommentText] = useState('');

    function handleChangeComment(event) {
        setCommentText(event.target.value);
    }

    async function sendNewComment(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Comment", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getMyPostsData();
        setCommentText('');
    }

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
                            <div>
                                <div className="like-wrapper">
                                    <Button onClick={() => changeLikeBtn({"postId": item.id})} innerHTML={<img className="like-icon" src={setPhoto(item)} alt="Like icon"></img>} />
                                    <span>{item.likes.length}</span>
                                </div>
                                <div className="comment-wrapper">
                                    <Button onClick={openComments} innerHTML={<img className="comment-icon" src={commentIcon} alt="Comment icon"></img>} />
                                    <span>{item.comments.length}</span>
                                </div>
                                <div>
                                    <Button onClick={changeBookmarkBtn} innerHTML={<img className="bookmark-icon" src={bookmarkIcon} alt="Bookmark icon"></img>} />
                                </div>
                            </div>
                            <div className="date-post">
                                {`${item.postDate.substr(0, 10)}  ${item.postDate.substr(11, 5)}`}
                            </div>
                        </div>
                        <div className="comments">
                            <ul className="comments-list">
                            {props.myPosts.myPosts.data[index].comments.length != 0 ?
                                props.myPosts.myPosts.data[index].comments.map((commentItem, commentIndex) =>
                                <li key={commentItem.id}>
                                    {console.log(commentItem)}
                                    <div className="comment-author">
                                        <img className="comment-img" src={authorIcon} alt="User"></img>
                                        <span>{commentItem.userName} {commentItem.userSurname}</span>
                                    </div>
                                    <div className="comment-content">{commentItem.commentText}</div>
                                    <div className="comment-date">{`${commentItem.commentDate.substr(0, 10)}  ${commentItem.commentDate.substr(11, 5)}`}</div>
                                </li>
                            ) : <li>There is no any comment</li>}
                            </ul>
                            <div className="comments-controllers">
                                <Input type={"text"} value={commentText} func={handleChangeComment} placeholder="Insert comment" />
                                <Button onClick={() => sendNewComment({"postId": item.id, "commentText": commentText})} innerHTML="Send" />
                            </div>
                        </div>
                    </li>
                ) : ''}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    isLog: state.isLog,
    myPosts: state.myPosts
})

const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
    deletePost: (data) => dispatch(deletePost(data)),
    getMyPostsData: () => dispatch(getMyPostsData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(MyPostsList);