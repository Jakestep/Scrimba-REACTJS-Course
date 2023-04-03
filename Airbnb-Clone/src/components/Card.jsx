export default function Card(props) {
    return (
        <div className='card-block'>
            <img src={`/assets/images/${props.img}`} className='card--image'/>
            <div>
                <div className='card--stats-block'>
                    <img src='/assets/images/star.png' />
                    <p className='card--stats'>{props.rating} <span className='light'>({props.reviewCount}) • {props.location}</span></p>
                </div>
                <p className='card--title'>{props.title}</p>
                <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}