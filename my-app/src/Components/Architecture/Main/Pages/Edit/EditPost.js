import React, { useState } from "react";

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

    async function getMyPostsData() {
        props.getMyPostsData()
    }

    async function editPostConfirm(dataPost, openEditPost, event) {

        if(dataPost.title.trim() != '') {
            if(dataPost.content.trim() != '') {
                let token = JSON.parse(localStorage.getItem('token')).token;
                const response = await fetch("https://localhost:7103/Post", {
                    method: 'PUT',
                    body: JSON.stringify(dataPost),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    }
                })
                openEditPost(event, setTitleErrorForEditPost, setContentErrorForEditPost)
                getMyPostsData();
            } else {
                let input = event.target.closest('.edit-post').children[0].children[1].children[1];
                input.focus();
                
                setTitleErrorForEditPost('');
                setContentErrorForEditPost('The content is empty');
            }
        } else {
            let input = event.target.closest('.edit-post').children[0].children[0].children[1];
            input.focus();
    
            setTitleErrorForEditPost('The title is empty');
        }
    }

    async function openEditPost(event, setTitleErrorForEditPost, setContentErrorForEditPost) {
        setTitleErrorForEditPost('');
        setContentErrorForEditPost('');
    
        let contentBlock = event.target.closest('li').children[1];
        let editBlock = event.target.closest('li').children[2];
    
        contentBlock.classList.toggle('display-none');
        editBlock.classList.toggle('display-block');
    
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
                    <textarea type="text" value={content} onChange={handleChangeContent} required="required" ></textarea>
                </div>
            </div>
            <div className="post-controllers">
                <Button className="confirm-btn" onClick={(event) => editPostConfirm({"id": props.id, "title": title, "content": content}, openEditPost, event)} innerHTML="Confirm edition" />
                <Button className="attach-btn"innerHTML={<><img src={attachBtn} alt="Attach icon"></img><Input type="file" /></>} />
                <Button className="close-btn" onClick={(event) => openEditPost(event, setTitleErrorForEditPost, setContentErrorForEditPost)} innerHTML="Cancel" />
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