import trollFace from '../assets/troll-face.png'

export default function Navbar() {
    return(
        <nav className="header">
            <div className='header--left'>
                <img className='header--trollface'src={trollFace}/>
                <h1 className='header--title'>Meme Generator</h1>
            </div>
            <div className='header--right'>
                <h2>React Course - Project 3</h2>
            </div>
        </nav>
    )
}