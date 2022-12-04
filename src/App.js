import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Work } from './components/Work/Work';
import './App.css';
import { Contact } from './components/Contact/Contact';
import { Route } from './components/Route';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/work'>
        <Work />
      </Route>
      <Contact />
    </div>
  );
}

export default App;
