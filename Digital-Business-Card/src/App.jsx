import './App.css';
import TopSection from './components/TopSection.jsx';
import BottomSection from './components/BottomSection.jsx';



function App() {

  return (
    <div className='container'>
      <div className='stuff-in-card'>
        <TopSection />
        <BottomSection />
      </div>
    </div>
  )
}

export default App
