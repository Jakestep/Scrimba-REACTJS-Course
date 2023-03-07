import React from 'react';
import ReactLogo from './images/react-logo.png';

function Header() {
    return (
        <header>
            <nav className = 'header-whole'>
                <img className='react-logo' src={ReactLogo} alt='React-logo'/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header