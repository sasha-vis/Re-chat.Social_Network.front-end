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

async function getData(setData) {
    let token = JSON.parse(localStorage.getItem('token')).token;
    await fetch(`https://localhost:7103/Post/MyPosts`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }})
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        setData(data);
    });
}

async function deletePost(event, setData) {
    const itemId = event.target.closest('li').dataset.id;
    // console.log(event.target)

    let token = JSON.parse(localStorage.getItem('token')).token;
        
    await fetch(`https://localhost:7103/Post/${itemId}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }})
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        setData(data);
    });

}

function MyPostsList(props) {
    const [data, setData] = useState([]);

    useEffect(function(){
        getData(setData);
    }, []);

    // console.log(props)

    return (
        <ul className="posts-list">
            {data.length !== 0 ?
                data.map((item, index) => 
                    <li className="post" key={index} data-id={item.id}>
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3><span>{item.userName}</span> <span>{item.userSurname}</span></h3>
                            <Button className="close-btn" onClick={(event) => deletePost(event, setData)} innerHTML={<img className="close-icon" src={closeIcon} alt="Close-icon"></img>} />
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
    isLog: state.isLog
})
  
// const mapDispatchToProps = (dispatch) => ({
//     changeButton: (data) => dispatch(changeButton(data))
// })
  
export default connect(mapStateToProps)(MyPostsList);