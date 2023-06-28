export default function Card(props) {
    console.log(props)
    return(
        <div className="card">
            <div className='imageHolder'>
                <img src={props.image} className='cardPic'></img>
            </div>
            <h2 className='cardTitle'>{props.title}</h2>
            <h3 className='cardDescription'>{props.description}</h3>
        </div>
    )
}