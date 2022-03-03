import React, {useState, useEffect} from "react";

// import Nav from './../Nav/Nav.js';
// import FavoritesPostsList from './Lists/FavoritesPostsList.js';
// import Button from "./../../../Common/Button.js";

// import './../../../../css/PageBlock/Profile.css';

// import closeIcon from './../../../../images/close.png';

import {getUserData} from "./../../../../../actions/user.action";
import {connect} from "react-redux";

function CommonEdit(props) {
    const [name, setName] = useState(props.user.user.data.name);
    const [surname, setSurname] = useState(props.user.user.data.surname);
    const [gender, setGender] = useState(props.user.user.data.gender);
    const [birthdate, setBirthdate] = useState(props.user.user.data.birthdayDate);

    function handleChangeName(event) {
        setName(event.target.value);
    }
    function handleChangeSurname(event) {
        setSurname(event.target.value);
    }
    function handleChangeGender(event) {
        setGender(event.target.value);
        console.log(gender)
    }
    function handleChangeBirthdate(event) {
        setBirthdate(event.target.value);
    }

    useEffect(function(){
        getUserData();
    }, []);

    async function getUserData() {
        props.getUserData()
    }

    async function sendInfo(data) {
        let token = JSON.parse(localStorage.getItem('token')).token;
        const response = await fetch("https://localhost:7103/User/ChangeGeneral", {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        getUserData();
    }

    return (
        <div className="edit-content">
            <h3>General:</h3>
            <form>
                <div>Name:<input value={name} onChange={handleChangeName} placeholder="Name"></input></div>
                <div>Surname:<input value={surname} onChange={handleChangeSurname} placeholder="Surname"></input></div>
                {/* <div>Gender:<input value={gender} onChange={handleChangeGender} placeholder="Gender"></input></div> */}
                <div>Gender:
                    <select>
                        <option onClick={handleChangeGender} value={gender}>{gender}</option>
                        <option onClick={handleChangeGender} value={gender === "Male" ? "Female" : "Male"}>{gender === "Male" ? "Female" : "Male"}</option>
                    </select>
                </div>
                <div>Birthdate:<input value={birthdate} onChange={handleChangeBirthdate} placeholder="Birthday date"></input></div>
                {/* <div>Photo:<input placeholder="Фото"></input></div> */}
                <button onClick={() => sendInfo({"name": name, "surname": surname, "gender": gender, "birthdayDate": birthdate})}>Send</button>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(CommonEdit);