import logo from './../images/logo.png';
import './../css/Header/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div>
                        <img className='logo' src={logo}></img>
                    </div>
                    <div className='auth-block'>
                        <button className='sign-in'>Sign In</button>
                        <button className='sign-up'>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;