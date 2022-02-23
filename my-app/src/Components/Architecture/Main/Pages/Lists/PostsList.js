import React,{useState, useEffect} from "react";

import likeIcon from './../../../../../images/heart-icon.png';
import likedIcon from './../../../../../images/heart-slctd-icon.png';
import commentIcon from './../../../../../images/comment-icon.png';
import bookmarkIcon from './../../../../../images/bookmark-icon.png';
import bookmarkedIcon from './../../../../../images/bookmark-slctd-icon.png';
import authorIcon from './../../../../../images/df-user-icon.png';

import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";

import {connect} from "react-redux";
import { getData } from './../../../../../actions/posts.action';



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

// async function getData(setData) {
//     await fetch(`https://localhost:7103/Post`)
//     .then((response) => {
//     return response.json();
//     })
//     .then((data) => {
//         setData(data);
//     });
// }

function PostsList(props) {

    const [userId, setUserId] = useState('');

    useEffect(function(){
        getPostsData();
    }, []);

    async function getPostsData() {
        props.getData()
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
    }

    function setPhoto(item) {
        let result;
        if(localStorage.getItem('user')) {
            if (item.likes.length != 0) {
                item.likes.forEach(function(itemLike, index) {
                    let likeUserId = itemLike.userId;
                    let userId = JSON.parse(localStorage.getItem('user')).data.id;
    
                    if (likeUserId === userId) {
                        console.log(true)
                        result = likedIcon
                    } else {
                        console.log(false)
                        result = likeIcon
                    }
                })
            } else {
                console.log(false)
                result = likeIcon
            }
        } else {
            result = likeIcon
        }
        return result;
    }

    return (
        <ul className="posts-list">
            {props.posts != 0 ?
                props.posts.posts.data.map((item, index) => 
                    <li className="post" key={index}>
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3><span>{item.userName}</span> <span>{item.userSurname}</span></h3>
                            {props.dltBtn}
                        </div>
                        <div className="post-content">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                        <div className="post-controllers">
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
                        <div className="comments">
                            <ul className="comments-list">
                            {props.posts.posts.data[index].comments.length != 0 ?
                                props.posts.posts.data[index].comments.map((commentItem, commentIndex) =>
                                <li key={commentItem.id}>
                                    <div className="comment-author">
                                        <img className="comment-img" src={authorIcon} alt="User"></img>
                                        <span>{commentItem.userName} {commentItem.userSurname}</span>
                                    </div>
                                    <div className="comment-content">{commentItem.commentText}</div>
                                </li>
                            ) : <li>There is no any comment</li>}
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
    user: state.user,
    posts: state.posts
})
  
const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);