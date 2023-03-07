import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Page from './App';
// import reportWebVitals from './reportWebVitals';




function App() {
    return (
        <div>
            <div className='footer-to-bottom'>
                <div>
                    <Header />
                    <MainContent />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}











// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

