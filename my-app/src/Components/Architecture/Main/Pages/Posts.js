import React, {useEffect, useState} from "react";

import Nav from './../Nav/Nav.js';
import PostsList from "./Lists/PostsList.js";
import Button from "../../../Common/Button.js";
import Input from "../../../Common/Input.js";

import {connect} from "react-redux";

import authorIcon from './../../../../images/df-user-icon.png';
import attachBtn from './../../../../images/attachments.png';
import closeIcon from './../../../../images/close.png';
import { setData } from "../../../../actions/user.action.js";

import { createPost2 } from "../../../../actions/posts.action.js";

function createPostBtn(event) {
    let newPost = event.target.closest('div').children[2];

    newPost.classList.toggle('display-block');
}

function closePost(event) {
    let closeBtn = event.target.closest('.new-post');

    closeBtn.classList.remove('display-block');
}

const url = 'https://localhost:7103/Post';

async function sendNewPost(event, data, props, setData) {
    console.log(JSON.stringify(data))
    let token = JSON.parse(localStorage.getItem('token')).token;
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }})
        const json = await response.json();
        } catch (error) {
        console.error('Ошибка:', error);
        }
}

function Posts(props){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleChangeTitle(event) {
        setTitle(event.target.value);
    }
    
    function handleChangeContent(event) {
        setContent(event.target.value);
    }

    return (
        <div className="posts-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Posts line</h1>

                    {props.isLog.isLog !== true ? <h3>If you want to create any post, you need to be authorized</h3> : <button onClick={createPostBtn} className="create-post">Create post</button>}
                    
                    <div className="new-post">
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3>Sasha Vysotski</h3>
                        </div>
                        <div className="post-content">
                            <div className="title-name">
                                <Input type={"text"} value={title} func={handleChangeTitle} placeholder="Insert title" />
                            </div>
                            <div className="content">
                                <textarea type="text" value={content} onChange={handleChangeContent}></textarea>
                            </div>
                        </div>
                        <div className="post-controllers">
                            <Button onClick={() => props.createPost({"title": title, "content": content})} className="confirm-btn" innerHTML="Send new post" />
                            <Button className="attach-btn" innerHTML={<><img src={attachBtn} alt="Attach icon"></img><Input type="file" /></>} />
                            <Button className="close-btn" onClick={closePost} innerHTML={<img className="close-icon" src={closeIcon} alt="Close icon"></img>} />
                        </div>
                    </div>
                </div>
                
                <PostsList />

            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
})

const mapDispatchToProps = (dispatch) => ({
    createPost: (data) => dispatch(createPost2(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);