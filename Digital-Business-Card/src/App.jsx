import './App.css'
import picture from './assets/picture.jpg'

function App() {

  return (
    <div id='container'>
      <img src={picture} id='picture'/>
      <div id='info'>
        <h1>Jacob Estep</h1>
        <p>Beginner something or other</p>
      </div>
    </div>
  )
}

export default App
