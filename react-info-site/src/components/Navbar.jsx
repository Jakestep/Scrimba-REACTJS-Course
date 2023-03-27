import logo from './images/react-logo.png'


export default function Navbar() {
    return (
        <>
        <div id='navbar'>
            <div id='navbar-left'>
                <img src={logo} alt='react logo' id='react-logo-nav'></img>
                <h2 id='logotext'>ReactFacts</h2>
            </div>
            <div id='navbar-right'>
                <h3>React Course - Project 1</h3>
            </div>
        </div>
        </>
    )
}