import React, {useState, useEffect} from "react";

import {getUserData} from "./../../../../../actions/user.action";
import {connect} from "react-redux";

import Input from "../../../../Common/Input.js";
import Button from "../../../../Common/Button.js";
import ErrorMessage from "../../../../Common/ErrorMessage";

async function sendInfo(data, setUsernameError, setSurnameError, getUserData) {

    if(data.name.trim() != ''){
        console.log(data.name)
        if(data.surname.trim() != ''){
            if(data.birthdayDate.trim() == '') {
                let now = new Date().toLocaleDateString();
                let year = now.substring(6);
                let month = now.substring(3, 5);
                let day = now.substring(0, 2);

                data.birthdayDate = `${year-18}-${month}-${day}`;
            }
            try {
                let token = JSON.parse(localStorage.getItem('token')).token;
                const response = await fetch("https://localhost:7103/Account/ChangeGeneral", {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    }
                })
                const json = await response.json();
                console.log('Успех:', JSON.stringify(json));
                    if (json.token) {
                        
                    } else {
                        console.error('Ошибка:');
                        alert(JSON.parse(json).errors)
                    }
                } catch (error) {
                    console.error('Ошибка:', error);
                }
        } else {
            setSurnameError('The surname is empty')
            setUsernameError('')
        }
    } else {
        setUsernameError('The username is empty')
    }
}

function CommonEdit(props) {
    const [name, setName] = useState(props.user.user.data.name);
    const [surname, setSurname] = useState(props.user.user.data.surname);
    const [gender, setGender] = useState(props.user.user.data.gender);
    const [birthdate, setBirthdate] = useState(props.user.user.data.birthdayDate);
    const [photo, setPhoto] = useState(props.user.user.data.photo);

    const [usernameError, setUsernameError] = useState('');
    const [surnameError, setSurnameError] = useState('');

    function handleChangeName(event) {
        setName(event.target.value);
    }
    function handleChangeSurname(event) {
        setSurname(event.target.value);
    }
    function handleChangeGender(event) {
        setGender(event.target.value);
    }
    function handleChangeBirthdate(event) {
        setBirthdate(event.target.value);
    }
    function handleChangePhoto(event) {
        setPhoto(event.target.value);
    }

    useEffect(function(){
        getUserData();
    }, []);

    async function getUserData() {
        props.getUserData()
    }

    return (
        <div className="edit-content">
            <h3>General:</h3>
            <form>
                <ErrorMessage innerHTML={usernameError} />
                <div>Name:<Input type={"text"} value={name} func={handleChangeName} placeholder="Name" required="required" /></div>
                <ErrorMessage innerHTML={surnameError} />
                <div>Surname:<Input type={"text"} value={surname} func={handleChangeSurname} placeholder="Surname" required="required" /></div>
                <div>Gender:
                    <select onChange={handleChangeGender} value={gender}>
                        <option value={gender}>{gender}</option>
                        <option value={gender === "Male" ? "Female" : "Male"}>{gender === "Male" ? "Female" : "Male"}</option>
                    </select>
                </div>
                <div>Birthdate:<Input type="date" value={birthdate} func={handleChangeBirthdate} placeholder="Birthday date" /></div>
                <div>Photo:<Input type="file" value={photo} func={handleChangePhoto} placeholder="Photo" /></div>
                <Button onClick={() => sendInfo({"name": name, "surname": surname, "gender": gender, "birthdayDate": birthdate, "photo": photo}, setUsernameError, setSurnameError, getUserData)} innerHTML="Send" />
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