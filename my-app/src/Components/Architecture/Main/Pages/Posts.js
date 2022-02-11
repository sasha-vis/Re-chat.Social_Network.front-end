import React from "react";

import Nav from './../Nav/Nav.js';
import PostsList from "./Lists/PostsList.js";
import Button from "../../../Common/Button.js";
import Input from "../../../Common/Input.js";

import {connect} from "react-redux";

import authorIcon from './../../../../images/df-user-icon.png';
import attachBtn from './../../../../images/attachments.png';
import closeIcon from './../../../../images/close.png';

function createPost(event) {
    let newPost = event.target.closest('div').children[2];

    newPost.classList.toggle('display-block');
}

function closePost(event) {
    let closeBtn = event.target.closest('.new-post');

    closeBtn.classList.remove('display-block');
}

function Posts(props){
    return (
        <div className="posts-block">

            <Nav />

            <main className="main">
                <div className='title-wrapper'>
                    <h1>Posts line</h1>

                    {props.isLog.isLog !== true ? <h3>If you want to create any post, you need to be authorized</h3> : <button onClick={createPost} className="create-post">Create post</button>}
                    
                    <div className="new-post">
                        <div className="post-author">
                            <img className="author-img" src={authorIcon} alt="User"></img>
                            <h3>Sasha Vysotski</h3>
                        </div>
                        <div className="post-content">
                            <div className="title-name">
                                <Input placeholder="Insert title" />
                            </div>
                            <div className="content">
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="post-controllers">
                            <Button className="confirm-btn" innerHTML="Send new post" />
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

export default connect(mapStateToProps)(Posts);