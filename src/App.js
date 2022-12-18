import React from 'react'
import { About, Informations, Footer, Header, Skills, Work} from './container/'
import { Navbar } from './components'
import './App.scss'

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Informations />
            <Work />
            <Skills />
            <Footer />
        </div>
    );
};

export default App;
