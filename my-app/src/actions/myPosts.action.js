import axios from "axios";

import { SET_MYPOSTS } from "./../constants/myPosts.constants";

export const setData = (data) => ({type: SET_MYPOSTS, data});

export const getMyPostsData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem('token')).token;
    let data = await axios.get('https://localhost:7103/Post/MyPosts', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch(setData(data))
}