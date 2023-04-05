import './App.css';
import Navbar from './components/Navbar.jsx';
import data from './data.js';
import Card from './components/Card.jsx';
export default function App() {
  const cards = data.map(data => {
    return(
      <Card
      key={data.id}
      {...data}
      />
    )
  })
  return (

    <div className='page'>
      <Navbar className='page--navbar-el' />
      <div className='page--cards-el'>
        {cards}
      </div>
    </div>
  )
}