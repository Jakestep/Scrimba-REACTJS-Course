import './App.css'
import {useState, useEffect} from 'react';
import data from './assets/stuff'
import Title from './components/Title'
import Card from './components/Card'
export default function App() {
  const {name, setName} = useState()
  const dataMapped = data.map(data => (
    <Card 
      image={data.image}
      title={data.title}
      description={data.description}
      />
    )
  )

  console.log(data)
  return(
    <div className='page'>
      <Title />
      <div className='cardSet'>
        {dataMapped}
      </div>
    </div>
  )
}