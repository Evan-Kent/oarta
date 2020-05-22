import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import thering from './thering.png';
import './App.css';
import api from './utilities/api';

function App() {
  const [books, setBooks] = useState(null)
  const [chapters, setChapters] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [movies, setMovies] = useState(null)
  const [quotes, setQuotes] = useState(null)

  
  useEffect(() => {
    let ignore = false;
    if (!ignore) 
    {
      api.getBooks(setBooks)
      api.getChapters(setChapters)
      api.getCharacters(setCharacters)
      api.getMovies(setMovies)
      api.getQuotes(setQuotes)
    }
    return () => { ignore = true; }
  }, [])
  
  if (movies)
  {
    console.log(movies)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={thering} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>
            {
              movies.map(movie => {
                return <li>

                </li>
              })
            }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
