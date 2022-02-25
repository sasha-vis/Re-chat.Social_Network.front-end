import React, { useEffect } from "react";

import authorIcon from './../../../../../images/df-user-icon.png';

import Button from "../../../../Common/Button";

import {connect} from "react-redux";
import { getUsersData } from "../../../../../actions/user.action";

function FriendsList(props) {

    useEffect(function(){
        getUsersData();
    }, []);

    async function getUsersData() {
        props.getUsersData()
    }

    return (
        <ul className="friends-list">
            {props.users != 0 ?
                props.users.users.data.map((item, index) => 
                    <li className="post" key={index}>
                        <img src={authorIcon} alt="User"></img>
                        <h3><span className="friend-name">{item.name}</span><span className="friend-surname">{item.surname}</span></h3>
                        <div className="friend-controller">
                            <Button className="delete-friend" innerHTML="Delete" />
                            <Button className="messege-friend" innerHTML="Send a messege" />
                        </div>
                    </li>) : <div>You don't have friends</div>}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    getUsersData: () => dispatch(getUsersData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);