import axios from "axios";

import { SET_POSTS } from "./../constants/posts.constants";
import { SET_FAVORITEPOSTS } from "./../constants/posts.constants";
import { SET_BOOKMARKPOSTS } from "./../constants/posts.constants";

export const setData = (data) => ({type: SET_POSTS, data});

export const getData = () => async (dispatch) => {
    let data = await axios.get('https://localhost:7103/Post', {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }});
    dispatch(setData(data))
}

export const getFavoritePosts = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem('token')).token;
    let data = await axios.get('https://localhost:7103/Post/Favorites', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch({type: SET_FAVORITEPOSTS, data})
}
export const getBookmarkPosts = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem('token')).token;
    let data = await axios.get('https://localhost:7103/Post/Bookmarks', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch({type: SET_BOOKMARKPOSTS, data})
}