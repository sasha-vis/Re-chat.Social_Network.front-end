import React, {useState} from "react";

// import Nav from './../Nav/Nav.js';
// import FavoritesPostsList from './Lists/FavoritesPostsList.js';
// import Button from "./../../../Common/Button.js";

// import './../../../../css/PageBlock/Profile.css';

// import closeIcon from './../../../../images/close.png';

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
    }
    function handleChangeBirthdate(event) {
        setBirthdate(event.target.value);
    }

    return (
        <div className="edit-content">
            <h3>General:</h3>
            <form>
                <div>Name:<input value={name} onChange={handleChangeName} placeholder="Name"></input></div>
                <div>Surname:<input value={surname} onChange={handleChangeSurname} placeholder="Surname"></input></div>
                <div>Gender:<input value={gender} onChange={handleChangeGender} placeholder="Gender"></input></div>
                <div>Birthdate:<input value={birthdate} onChange={handleChangeBirthdate} placeholder="Birthday date"></input></div>
                {/* <div>Photo:<input placeholder="Фото"></input></div> */}
                <button>Send</button>
            </form>
        </div>
    )
}

export default CommonEdit;