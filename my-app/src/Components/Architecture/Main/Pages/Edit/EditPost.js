import React, { useState, useEffect } from "react";

import Button from "../../../../Common/Button";
import Input from "../../../../Common/Input";
import ErrorMessage from "../../../../Common/ErrorMessage";

import {connect} from "react-redux";
import { getMyPostsData } from "../../../../../actions/myPosts.action";

import attachBtn from "./../../../../../images/attachments.png";

function EditPost(props) {

    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [titleErrorForEditPost, setTitleErrorForEditPost] = useState('');
    const [contentErrorForEditPost, setContentErrorForEditPost] = useState('');

    function handleChangeTitle(event) {
        setTitle(event.target.value);
    }
    function handleChangeContent(event) {
        setContent(event.target.value);
    }

    useEffect(function(){
        getMyPostsData();
    }, []);

    async function getMyPostsData() {
        props.getMyPostsData()
    }

    async function editPostConfirm(data, openEditPost, event) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Post", {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        openEditPost(event, setTitleErrorForEditPost, setContentErrorForEditPost)
        getMyPostsData();
    }

    async function openEditPost(event, setTitleErrorForEditPost, setContentErrorForEditPost, getMyPostsData) {
        setTitleErrorForEditPost('');
        setContentErrorForEditPost('');
    
        let contentBlock = event.target.closest('li').children[1];
        let editBlock = event.target.closest('li').children[2];
    
        contentBlock.classList.toggle('display-none');
        editBlock.classList.toggle('display-block');

        let token = JSON.parse(localStorage.getItem('token')).token;

        const response = await fetch("https://localhost:7103/Post", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    
        getMyPostsData();
    }

    return (
        <div className="edit-post">
            <div className="post-content">
                <div className="title-name">
                    <ErrorMessage innerHTML={titleErrorForEditPost} />
                    <Input type={"text"} value={title} func={handleChangeTitle} placeholder="Insert title" required="required" maxLength={50} minLength={1} />
                </div>
                <div className="content">
                    <ErrorMessage innerHTML={contentErrorForEditPost} />
                    <textarea type="text" value={content} onChange={handleChangeContent}></textarea>
                </div>
            </div>
            <div className="post-controllers">
                <Button className="confirm-btn" onClick={(event) => editPostConfirm({"id": props.id, "title": title, "content": content}, openEditPost, event)} innerHTML="Confirm edition" />
                <Button className="attach-btn"innerHTML={<><img src={attachBtn} alt="Attach icon"></img><Input type="file" /></>} />
                <Button className="close-btn" onClick={(event) => openEditPost(event, setTitleErrorForEditPost, setContentErrorForEditPost, getMyPostsData)} innerHTML="Cancel" />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    myPosts: state.myPosts
})

const mapDispatchToProps = (dispatch) => ({
    getMyPostsData: () => dispatch(getMyPostsData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);