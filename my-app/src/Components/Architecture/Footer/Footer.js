import logo from './../../../images/logo.png';

import styles from './../../../css/Footer/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerBlock}>
                    <div>
                        <img className={styles.logo} src={logo} alt="Logo icon"></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;