
import { useState } from 'react';
import Axios from 'axios';


export default function MemeForm() {
    const [data, setData] = useState({
        memeImage: '',
        topLineText: '',
        bottomLineText: ''
    })
    
    function getMemeImage(e) {
        const memeURL = Axios.get("https://meme-api.com/gimme").then(response => {
            if (response.data.nsfw) {
                setData(prevData => (
                    {
                        ...prevData,
                        memeImage: 'https://www.savingcountrymusic.com/wp-content/uploads/2014/05/carrie-underwood-miranda-lambert-something-bad.jpg'
                    }
                ))} else {
                setData(prevData => (
                    {
                        ...prevData,
                        memeImage: response.data.url
                    }
                ))
            }

            })
    }
    function handleChange(e) {
        setData(prevData => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }
    return(
        <main className='main'>
            <div className='form'>
                <div className='form--input-container'>
                    <input type='text' onChange={handleChange} id='meme--toplineinput' name='topLineText' className='form--input' placeholder='Top Line' value={data.topLineText}/>
                    <input type='text' onChange={handleChange} id='meme--bottomlineinput' name='bottomLineText' className='form--input' placeholder='Bottom Line' value={data.bottomLineText}/>
                </div>
                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🐱‍🚀</button>
            </div>
            <div className='meme--container'>
                <p className='meme--topline'>{data.topLineText}</p>
                <p className='meme--bottomline'>{data.bottomLineText}</p>
                <img
                    src={data.memeImage}
                    className='meme--image'
                />

            </div>
        </main>
    )
}