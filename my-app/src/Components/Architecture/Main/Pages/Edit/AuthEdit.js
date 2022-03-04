import React, {useState, useEffect} from "react";

// import Nav from './../Nav/Nav.js';
// import FavoritesPostsList from './Lists/FavoritesPostsList.js';
// import Button from "./../../../Common/Button.js";

// import './../../../../css/PageBlock/Profile.css';

// import closeIcon from './../../../../images/close.png';

import {getUserData} from "./../../../../../actions/user.action";
import {connect} from "react-redux";

function AuthEdit(props) {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    function handleChangeOldPassword(event) {
        setOldPassword(event.target.value);
    }
    function handleChangeNewPassword(event) {
        setNewPassword(event.target.value);
    }
    function handleChangeConfirmNewPassword(event) {
        setConfirmNewPassword(event.target.value);
    }

    useEffect(function(){
        getUserData();
    }, []);

    async function getUserData() {
        props.getUserData()
    }

    async function sendInfo(data) {
        if (data.oldPassword != '') {
            if (data.newPassword != '') {
                if (data.confirmNewPassword != '') {
                    if (data.newPassword === data.confirmNewPassword) {
                        let token = JSON.parse(localStorage.getItem('token')).token;
                        const response = await fetch("https://localhost:7103/Account/ChangePassword", {
                            method: 'PUT',
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + token
                            }
                        })
                        getUserData();
                    }
                }
            }
        }
    }
    return (
        <div className="edit-content">
            <h3>Authentication:</h3>
            <form>
                <div className="edit-block-email">{props.user.user.data.email}</div>
                <div>Old password:<input type={"text"} value={oldPassword} onChange={handleChangeOldPassword} placeholder="Old password"></input></div>
                <div>New password:<input type={"text"} value={newPassword} onChange={handleChangeNewPassword} placeholder="New password"></input></div>
                <div>Confirm new password:<input type={"text"} value={confirmNewPassword} onChange={handleChangeConfirmNewPassword} placeholder="Confirm new password"></input></div>
                <button onClick={() => sendInfo({"oldPassword": oldPassword, "newPassword": newPassword, "confirmNewPassword": confirmNewPassword})}>Send</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})
  
const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(AuthEdit);