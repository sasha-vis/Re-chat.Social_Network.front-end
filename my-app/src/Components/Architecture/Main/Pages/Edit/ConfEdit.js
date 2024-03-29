import React, { useState, useEffect } from "react";

import {getUserData} from "./../../../../../actions/user.action";
import {connect} from "react-redux";
import Button from "../../../../Common/Button";

function ConfEdit(props) {
    const [checkbox, setCheckbox] = useState(props.user.user.data.excludeFromSearch);

    function changeCheckbox(event) {
        
        if (event.target.defaultChecked === false)
        {
            setCheckbox(true);
        } else {
            setCheckbox(false);
        }
    }

    useEffect(function(){
        getUserData();
    }, []);

    async function getUserData() {
        props.getUserData()
    }

    async function sendInfo() {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/Account/ExcludeFromSearch", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getUserData();
    }

    return (
        <div className="edit-content">
            <h3>Confidential:</h3>
            <form>
                <div>Hide from search:<input type="checkbox" defaultChecked={checkbox} onClick={(event) => changeCheckbox(event)} className="checkbox"></input></div>
                <Button onClick={() => sendInfo()} innerHTML="Send" />
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ConfEdit);