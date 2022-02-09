// import React from "react";

// import HeaderIfNotAuth from "./HeaderIfNotAuth.js";

import styles from './../css/Footer/Footer.module.css';

import logo from './../images/logo.png';
import './../css/Footer/Footer.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="footer-block">
                    <div>
                        <img className='logo' src={logo}></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;