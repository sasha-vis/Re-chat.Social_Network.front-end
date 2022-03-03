import React,{useState, useEffect} from "react";

import likeIcon from './../../../../../images/heart-icon.png';
import likedIcon from './../../../../../images/heart-slctd-icon.png';
import commentIcon from './../../../../../images/comment-icon.png';
import bookmarkIcon from './../../../../../images/bookmark-icon.png';
import bookmarkedIcon from './../../../../../images/bookmark-slctd-icon.png';
import authorIcon from './../../../../../images/df-user-icon.png';
import closeIcon from './../../../../../images/close.png';
import editIcon from './../../../../../images/pen.png';

import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";

import EditPost from "../Edit/EditPost";

import {connect} from "react-redux";
import { deletePost } from './../../../../../actions/posts.action';
import { getMyPostsData } from "../../../../../actions/myPosts.action";
import { getUserData } from "../../../../../actions/user.action";
import ErrorMessage from "../../../../Common/ErrorMessage";
import attachBtn from './../../../../../images/attachments.png';

function createPostBtn(event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost) {
    setTitle('');
    setContent('');
    setTitleErrorForNewPost('');
    setContentErrorForNewPost('');

    let newPost = event.target.closest('div').children[2];

    newPost.classList.toggle('display-block');
}

function closePost(event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost) {
    let closeBtn = event.target.closest('.new-post');

    closeBtn.classList.remove('display-block');
    setTitle('');
    setContent('');
    setTitleErrorForNewPost('');
    setContentErrorForNewPost('');
}

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

function openComments(event, setCommentText, setCommentErrorForNewPost, currentIndex) {
    setCommentText('');
    setCommentErrorForNewPost('');

    let comments = event.target.closest('li').children[3];

    comments.classList.toggle('display-flex');
}

function openEditPost(event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost) {
    setTitle('');
    setContent('');
    setTitleErrorForNewPost('');
    setContentErrorForNewPost('');

    let contentBlock = event.target.closest('li').children[1];
    let editBlock = event.target.closest('li').children[2];

    contentBlock.classList.toggle('display-none');
    editBlock.classList.toggle('display-block');
}

async function editPostConfirm(data, setTitle, setContent, props, event, setTitleErrorForNewPost, setContentErrorForNewPost) {
    if(data.title.trim() != '') {
        if(data.content.trim() != '') {
            props.createPost(data)
            setTitle('');
            setContent('');
            setTitleErrorForNewPost('');
            setContentErrorForNewPost('');
            closePost(event)
        } else {
            let input = event.target.closest('.new-post').children[1].children[1].children[1];
            input.focus();
            
            setTitleErrorForNewPost('');
            setContentErrorForNewPost('The content is empty');
        }
    } else {
        let input = event.target.closest('.new-post').children[1].children[0].children[1];
        input.focus();

        setTitleErrorForNewPost('The title is empty');
    }
}

function MyPostsList(props) {

    const [commentErrorForNewPost, setCommentErrorForNewPost] = useState('');

    useEffect(function(){
        getMyPostsData();
    }, []);

    async function getMyPostsData() {
        props.getMyPostsData()
    }
    async function getUserData() {
        props.getUserData()
    }
    async function getBookmarkPosts() {
        props.getBookmarkPosts()
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

    async function changeBookmarkBtn(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Bookmark", {
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

    async function deleteBtn(dataItem) {
        let token = JSON.parse(localStorage.getItem('token')).token;
    
        let data = await fetch(`https://localhost:7103/Post/${dataItem.index}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        });

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

    function setBookmarkPhoto(item) {
        let result;
        if(localStorage.getItem('user')) {
            if (item.bookmarks.length != 0) {
                item.bookmarks.forEach(function(itemBookmark, index) {
                    let bookmarkUserId = itemBookmark.userId;
                    let userId = JSON.parse(localStorage.getItem('user')).data.id;
    
                    if (bookmarkUserId === userId) {
                        result = bookmarkedIcon
                    } else {
                        result = bookmarkIcon
                    }
                })
            } else {
                result = bookmarkIcon
            }
        } else {
            result = bookmarkIcon
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
            getMyPostsData();
            setCommentText('');
            setCommentErrorForNewPost('')
        } else {
            setCommentErrorForNewPost('The comment is empty')

            let input = event.target.closest('.comments-controllers').children[1];
            input.focus();
        }
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleErrorForNewPost, setTitleErrorForNewPost] = useState('');
    const [contentErrorForNewPost, setContentErrorForNewPost] = useState('');

    function handleChangeTitle(event) {
        setTitle(event.target.value);
    }
    
    function handleChangeContent(event) {
        setContent(event.target.value);
    }

    return (
        <ul className="posts-list">
            {props.myPosts != 0 ?
                props.myPosts.myPosts.data.map((item, index) => 
                    <li className="post" key={index} data-id={index}>
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3><span>{item.userName}</span> <span>{item.userSurname}</span></h3>
                            <Button className="edit-btn-for-post" onClick={(event) => openEditPost(event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost)} innerHTML={<img className="edit-icon-for-post" src={editIcon} alt="Edit-icon" title="Edit this post"></img>} />
                            <Button className="close-btn" onClick={() => deleteBtn({index: item.id})} innerHTML={<img className="close-icon" src={closeIcon} alt="Close-icon" title="Delete this post"></img>} />
                        </div>
                        <div className="post-content">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                        <EditPost title={item.title} content={item.content} id={item.id} />
                        <div className="comments" data-id={index}>
                            <ul className="comments-list">
                            {props.myPosts.myPosts.data[index].comments.length != 0 ?
                                props.myPosts.myPosts.data[index].comments.map((commentItem, commentIndex) =>
                                <li key={commentItem.id} data-id={index}>
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
                        <div className="post-controllers">
                            <div>
                                <div className="like-wrapper">
                                    <Button onClick={() => changeLikeBtn({"postId": item.id})} innerHTML={<img className="like-icon" src={setPhoto(item)} alt="Like icon"></img>} />
                                    <span>{item.likes.length}</span>
                                </div>
                                <div className="comment-wrapper">
                                    <Button onClick={(event) => openComments(event, setCommentText, setCommentErrorForNewPost, index)} innerHTML={<img className="comment-icon" src={commentIcon} alt="Comment icon"></img>} />
                                    <span>{item.comments.length}</span>
                                </div>
                                <div>
                                    <Button onClick={() => changeBookmarkBtn({"postId": item.id})} innerHTML={<img className="bookmark-icon" src={setBookmarkPhoto(item)} alt="Bookmark icon"></img>} />
                                </div>
                            </div>
                            <div className="date-post">
                                {`${item.postDate.substr(0, 10)}  ${item.postDate.substr(11, 5)}`}
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