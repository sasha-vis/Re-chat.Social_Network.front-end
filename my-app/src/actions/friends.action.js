import axios from "axios";

import { SET_FRIENDS } from "./../constants/friendList.constants";

export const setData = (data) => ({type: SET_FRIENDS, data});

export const getFriendsData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem('token')).token;
        let data = await axios.get('https://localhost:7103/Friend/FriendsByUser', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch(setData(data))
}