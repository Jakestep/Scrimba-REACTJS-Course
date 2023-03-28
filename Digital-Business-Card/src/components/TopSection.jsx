import picture from '../assets/picture.jpg'

export default function TopSection() {
    return(
        <div className='top-section'>
          <img src={picture} id='picture'/>
          <div>
            <div className='info'>
                <h1 id='name'>Jacob Estep</h1>
                <p id='contact-info'>jakestep.17@gmail.com | (575) 520-4956</p>
            </div>
            <div className='objectives_container'>
                <h3>Objectives:</h3>
                <ul>
                  <li>Career in Software Engineering/Comuputer Science</li>
                  <li>Jobs/Internships to gain relevent experience</li>
                </ul>
            </div>
          </div>
        </div>
    )
}