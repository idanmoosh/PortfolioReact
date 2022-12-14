import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Work } from './components/Work/Work';
import './App.css';
import { Contact } from './components/Contact/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
