import React, {useEffect, useState} from "react";

import {getUserData} from './actions/user.action';

import {connect} from "react-redux";

import Header from "./Components/Architecture/Header/Header";
import Main from "./Components/Architecture/Main/Main";
import Footer from "./Components/Architecture/Footer/Footer";

function AppWrapper(props) {

    const [userId, setUserId] = useState('');

    async function getUserData() {
        props.getUserData()
    }

    useEffect(function(){
        if (localStorage.getItem('token')) {
            getUserData();
            setUserId(props.user)
        }
    }, []);

    return(
        <>
            <Header />
            <Main userId={userId} />
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})
  
const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);