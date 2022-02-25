import logo from './../../../images/logo2.png';

import styles from './../../../css/Footer/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerBlock}>
                    <div>
                        <img className={styles.logo} src={logo} alt="Logo icon"></img>
                        &#169;
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;