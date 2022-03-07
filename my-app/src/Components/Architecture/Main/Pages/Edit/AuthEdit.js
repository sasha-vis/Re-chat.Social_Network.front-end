import React, {useState, useEffect} from "react";

import {getUserData} from "./../../../../../actions/user.action";
import {connect} from "react-redux";

import Input from "../../../../Common/Input";
import Button from "../../../../Common/Button";

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
                <div>Old password:<Input type={"text"} value={oldPassword} func={handleChangeOldPassword} placeholder="Old password" required="required" /></div>
                <div>New password:<Input type={"text"} value={newPassword} func={handleChangeNewPassword} placeholder="New password" required="required" /></div>
                <div>Confirm new password:<Input type={"text"} value={confirmNewPassword} onChange={handleChangeConfirmNewPassword} placeholder="Confirm new password" required="required" /></div>
                <Button onClick={() => sendInfo({"oldPassword": oldPassword, "newPassword": newPassword, "confirmNewPassword": confirmNewPassword})} innerHTML="Send" />
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