export default function Card(props) {
    console.log(props)
    // console.log(props)
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.openSpots > 0 && props.openSpots <= 10) {
        badgeText = `SPOTS LEFT: ${props.openSpots}`
    } else if (props.location === "Online") {
        badgeText = 'ONLINE'
    }

    return (
        <div className='card-block'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`/assets/images/${props.coverImg}`} className='card--image'/>
            <div>
                <div className='card--stats-block'>
                    <img src='/assets/images/star.png' />
                    <p className='card--stats'>{props.stats.rating} <span className='light'>({props.reviewCount}) • {props.location}</span></p>
                </div>
                <p className='card--title'>{props.title}</p>
                <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}