import axios from "axios";

import { SET_REQUESTS } from "./../constants/friendList.constants";

export const setData = (data) => ({type: SET_REQUESTS, data});

export const getRequestsData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem('token')).token;
        let data = await axios.get('https://localhost:7103/Friend/FriendsRequestByUser', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch(setData(data))
}