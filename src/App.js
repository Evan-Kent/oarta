import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import thering from './thering.png';
import './App.css';
import { getMovies } from './utilities/api';
import './models/Movie';

function App() {
  const [movies, setMovies] = useState({})
  
  useEffect(() => {
    let ignore = false;
    if (!ignore) getMovies(setMovies)
    return () => { ignore = true; }
  }, [])
  console.log(movies)
  return (
    <div className="App">
      <header className="App-header">
        <img src={thering} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          hi
        </div>
      </header>
    </div>
  );
}

export default App;
