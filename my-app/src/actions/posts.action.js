import axios from "axios";
import { SET_MYPOSTS } from "../constants/myPosts.constants";

import { SET_POSTS } from "./../constants/posts.constants";
import { DELETE_POST } from "./../constants/posts.constants";

export const setData = (data) => ({type: SET_POSTS, data});

export const getData = () => async (dispatch) => {
    let data = await axios.get('https://localhost:7103/Post', {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }});
    dispatch(setData(data))
}

export const deletePost = (dataUser) => async (dispatch) => {
    const itemId = dataUser.index;
    let token = JSON.parse(localStorage.getItem('token')).token;
    
    let data = await axios.delete(`https://localhost:7103/Post/${itemId}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch({type: SET_MYPOSTS, data})
}