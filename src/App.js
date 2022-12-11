import React from 'react'
import { About, Informations, Footer, Header, Skills, Testimonials, Work} from './container/'
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
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;
