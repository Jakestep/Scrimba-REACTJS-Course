import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import cardData from './data';


function App() {
  const cardElements = cardData.map(data => {
    return <Card
        key={data.id}
        {...data}
      />})
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-container'>
        {cardElements}
      </section>
    </div>
  )
}


  // <Card 
  //         img='/assets/images/katie-zaferes.png'
  //         rating = {5.0}
  //         reviewCount = {6}
  //         country = 'USA'
  //         title="Life Lessons with Katie Zaferes"
  //         price = {136}
  //       />


export default App
