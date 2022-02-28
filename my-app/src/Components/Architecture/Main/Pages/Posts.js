import React, {useEffect, useState} from "react";

import Nav from './../Nav/Nav.js';
import PostsList from "./Lists/PostsList.js";
import Button from "../../../Common/Button.js";
import Input from "../../../Common/Input.js";
import ErrorMessage from "../../../Common/ErrorMessage.js";

import {connect} from "react-redux";

import authorIcon from './../../../../images/df-user-icon.png';
import attachBtn from './../../../../images/attachments.png';
import closeIcon from './../../../../images/close.png';
import { setData } from "../../../../actions/user.action.js";

import { createPostFromMain, getData } from "../../../../actions/posts.action.js";

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

const url = 'https://localhost:7103/Post';

// async function sendNewPost(event, data, props, setData) {
//     console.log(JSON.stringify(data))
//     let token = JSON.parse(localStorage.getItem('token')).token;
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + token
//             }})
//         const json = await response.json();
//         } catch (error) {
//         console.error('Ошибка:', error);
//         }
// }

async function createPostConfirm(data, props, event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost, getPostsData) {
    if(data.title.trim() != '') {
        if(data.content.trim() != '') {
            props.createPost(data)
            getPostsData();
            setTitle('');
            setContent('');
            setTitleErrorForNewPost('');
            setContentErrorForNewPost('');
            closePost(event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost)
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

function Posts(props){
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

    async function getPostsData() {
        props.getData()
    }
    return (
        <div className="posts-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Posts line</h1>

                    {props.isLog.isLog !== true ? <h3>If you want to create any post, you need to be authorized</h3> : <button onClick={(event) => createPostBtn(event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost)} className="create-post">Create post</button>}
                    
                    <div className="new-post">
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3>
                                {props.user != 0 ? `${props.user.user.data.name} ${props.user.user.data.surname}` : ''}
                            </h3>
                        </div>
                        <div className="post-content">
                            <div className="title-name">
                                <ErrorMessage innerHTML={titleErrorForNewPost} />
                                <Input type={"text"} value={title} func={handleChangeTitle} placeholder="Insert title" />
                            </div>
                            <div className="content">
                                <ErrorMessage innerHTML={contentErrorForNewPost} />
                                <textarea type="text" value={content} onChange={handleChangeContent}></textarea>
                            </div>
                        </div>
                        <div className="post-controllers">
                            <Button onClick={(event) => createPostConfirm({"title": title, "content": content}, props, event, setTitle, setContent, setTitleErrorForNewPost, setContentErrorForNewPost, getPostsData)} className="confirm-btn" innerHTML="Send new post" />
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
    isLog: state.isLog,
    user: state.user,
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    createPost: (data) => dispatch(createPostFromMain(data)),
    getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);