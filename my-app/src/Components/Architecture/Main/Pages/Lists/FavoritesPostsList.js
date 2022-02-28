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
import ErrorMessage from "../../../../Common/ErrorMessage";

import {connect} from "react-redux";
import { getData, getFavoritePosts } from './../../../../../actions/posts.action';
import { getUserData } from "../../../../../actions/user.action";



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

function openComments(event, setCommentText, setCommentErrorForNewPost) {
    setCommentText('');
    setCommentErrorForNewPost('');

    let comments = event.target.closest('li').children[3];

    comments.classList.toggle('display-flex');
}

// async function getData(setData) {
//     await fetch(`https://localhost:7103/Post`)
//     .then((response) => {
//     return response.json();
//     })
//     .then((data) => {
//         setData(data);
//     });
// }

function FavoritesPostsList(props) {

    const [commentErrorForNewPost, setCommentErrorForNewPost] = useState('');

    useEffect(function(){
        getPostsData();
        getFavoritePosts()
    }, []);

    async function getPostsData() {
        props.getData()
    }
    async function getUserData() {
        props.getUserData()
    }

    async function getFavoritePosts(){
        props.getFavoritePosts()
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
        getPostsData();
        getFavoritePosts();
        getUserData();
    }

    function setPhoto(item) {
        let result;
        if(localStorage.getItem('user')) {
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
        } else {
            result = likeIcon
        }
        return result;
    }

    const [commentText, setCommentText] = useState('');

    function handleChangeComment(event) {
        setCommentText(event.target.value);
    }

    async function sendNewComment(data, event) {
        if(commentText.trim() != '') {
            let token = JSON.parse(localStorage.getItem('token')).token;
            const response = await fetch("https://localhost:7103/Comment", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
            getPostsData();
            getFavoritePosts();
            setCommentText('');
            setCommentErrorForNewPost('')
        } else {
            setCommentErrorForNewPost('The comment is empty')

            let input = event.target.closest('.comments-controllers').children[1];
            input.focus();
        }
    }

    return (
        <ul className="posts-list">
            {props.favoritePosts != 0 ?
                props.favoritePosts.favoritePosts.data.map((item, index) => 
                    <li className="post" key={index}>
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3><span>{item.userName}</span> <span>{item.userSurname}</span></h3>
                            <Button className="close-btn" onClick={() => changeLikeBtn({"postId": item.id})} innerHTML={<img className="close-icon" src={closeIcon} alt="Close-icon"></img>} />
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
                                    <Button onClick={(event) => openComments(event, setCommentText, setCommentErrorForNewPost)} innerHTML={<img className="comment-icon" src={commentIcon} alt="Comment icon"></img>} />
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
                            {props.favoritePosts.favoritePosts.data[index].comments.length != 0 ?
                                props.favoritePosts.favoritePosts.data[index].comments.map((commentItem, commentIndex) =>
                                <li key={commentItem.id}>
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
                                <ErrorMessage innerHTML={commentErrorForNewPost} />
                                <Input type={"text"} value={commentText} func={handleChangeComment} placeholder="Insert comment" />
                                <Button onClick={(event) => sendNewComment({"postId": item.id, "commentText": commentText}, event)} innerHTML="Send" />
                            </div>
                        </div>
                    </li>
                ) : ''}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    posts: state.posts,
    favoritePosts: state.favoritePosts
})
  
const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
    getData: () => dispatch(getData()),
    getFavoritePosts: () => dispatch(getFavoritePosts())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPostsList);