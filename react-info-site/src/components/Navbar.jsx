import ReactLogo from './images/react-logo.png';

function Navbar() {
    return (
        <nav id='navbar'>
            <div id='nav-left-container'>
                <img src={ReactLogo} alt='React Logo' id='react-logo'/>
                <h1>ReactFacts</h1>
            </div>
            <h1 id='nav-right-el'>
                React Course - Project 1
            </h1>
        </nav>
    )
}

export default Navbar