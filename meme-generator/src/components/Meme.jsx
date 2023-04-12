import memesData from '../memesData';



export default function MemeForm() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const tempNum = Math.floor(Math.random() * memesArray)
        var url = memesArray[tempNum].url
        console.log(url)
    }
    console.log(memesData)
    return(
        <main className='form'>
            <div className='form'>
                <div className='form--input-container'>
                    <input type='text' className='form--input' placeholder='Top Line'/>
                    <input type='text' className='form--input' placeholder='Bottom Line'/>
                </div>
                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🐱‍🚀</button>
            </div>
        </main>
    )
}