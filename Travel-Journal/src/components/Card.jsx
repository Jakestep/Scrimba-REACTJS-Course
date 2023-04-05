import marker from '../assets/marker-icon.png';

export default function Card(props) {
    return(
        <div className ='card-container'>
            <div className ='shadow'>
                <img className='card--image'src={`/images/${props.img}`} alt={`image of ${props.destination}`}/>
            </div>
            <div className='card--info'>
                <div className='card--geographical-info'>
                    <h2 className='card--country'><img className='card--country--marker-icon'src={marker}/>{props.country}</h2>
                    <a className='card--maps-link'href={props.mapsLink} target='_blank'>View on Google Maps</a>
                </div>
                <h1 className='card--destination'>{props.destination}</h1>
                <h3 className='card--dates'>{props.dates}</h3>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}







/*
country: "Norway"
dates: "01 Oct, 2021 - 18 Nov, 2021"
description: "The Geiranger Fjord is a fjord in the Sunnmore region of More of Romsdal county, Norway. It is located entirely in the Stranda Municipality."
destination: "Geirangerfjord"
id: 2
img: "Geirangerfjord.jpg"
mapsLink: "https://www.google.com/maps/place/Geirangerfjord/@62.1045668,6.7957285,10z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi"

*/