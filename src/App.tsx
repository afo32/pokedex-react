import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Items, Pokemon, Pokemons, LandingPages,  } from './pages';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/pokemons/:name' element={<Pokemon />}/>
        <Route path='/pokemons' element={<Pokemons />}/>
        <Route path='/items' element={<Items />}/>
        <Route path='/' element={<LandingPages />}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
