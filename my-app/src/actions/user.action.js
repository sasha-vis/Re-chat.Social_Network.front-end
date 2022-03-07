import axios from "axios";

import { SET_USER } from "./../constants/user.constants";
import { SET_USERS } from "./../constants/user.constants";
import { EXIT_ACCOUNT } from "./../constants/user.constants";

export const setData = (data) => ({type: SET_USER, data});
export const exitAccount = () => ({type: EXIT_ACCOUNT});

export const getUserData = () => async (dispatch) => {
    try {
        let token = JSON.parse(localStorage.getItem('token')).token;
        let data = await axios.get('https://localhost:7103/User/Profile', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
        dispatch(setData(data))
    } catch(error) {
        dispatch(exitAccount());
    }
}

export const getUsersData = () => async (dispatch) => {
    let token = JSON.parse(localStorage.getItem('token')).token;
    let data = await axios.get('https://localhost:7103/Friend/FriendsToAddByUser', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }});
    dispatch({type: SET_USERS, data})
}