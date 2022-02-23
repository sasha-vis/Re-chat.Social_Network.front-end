import axios from "axios";
import { SET_MYPOSTS } from "../constants/myPosts.constants";

import { SET_POSTS } from "./../constants/posts.constants";
import { DELETE_POST } from "./../constants/posts.constants";
import { CREATE_POST } from "./../constants/posts.constants";

export const setData = (data) => ({type: SET_POSTS, data});

export const getData = () => async (dispatch) => {
    let data = await axios.get('https://localhost:7103/Post', {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }});
    dispatch(setData(data))
}

export const deletePost = (postId) => async (dispatch) => {
    const itemId = postId.index;
    let token = JSON.parse(localStorage.getItem('token')).token;
    
    let data = await axios.delete(`https://localhost:7103/Post/${itemId}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch({type: SET_MYPOSTS, data})
}

// export const createPost = (dataPost) => async (dispatch) => {
//     let token = JSON.parse(localStorage.getItem('token')).token;

//     console.log(dataPost)
//     //console.log(JSON.stringify(dataPost))
    
    
//     let data = await axios.post('https://localhost:7103/Post', {
//         method: 'POST',
//         body: JSON.stringify(dataPost),
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer " + token
//         }});
    
//     dispatch({type: SET_MYPOSTS, data})
// }
export const createPost = (dataPost) => async (dispatch) => {
    const header = JSON.parse(localStorage.getItem("token"));
    const body = { title: dataPost.title, content: dataPost.content }
    
    
    let data = await axios.post("https://localhost:7103/Post", body, {headers:{"Authorization" : `Bearer ${header.token}`}})
    
    dispatch({type: SET_MYPOSTS, data})
}
export const createPost2 = (dataPost) => async (dispatch) => {
    const header = JSON.parse(localStorage.getItem("token"));
    const body = { title: dataPost.title, content: dataPost.content }
    
    
    let data = await axios.post("https://localhost:7103/Post", body, {headers:{"Authorization" : `Bearer ${header.token}`}})
    
    dispatch({type: SET_POSTS, data})
}