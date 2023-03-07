import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';


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

export default App;

