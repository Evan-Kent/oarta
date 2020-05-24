import React, { useState, useEffect } from 'react';
import './App.css';
import api from './utilities/api';
import { Navigation } from './components'

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
      // api.getBooks(setBooks)
      // api.getChapters(setChapters)
      // api.getCharacters(setCharacters)
      //api.getMovies(setMovies)
      api.getQuotes(setQuotes)
    }
    return () => { ignore = true; }
  }, [])
  
  if (quotes)
  {
    console.log(quotes)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <section>
        <img src={'thering192.png'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>
            {
              movies ? movies.docs.map(movie => {
                return <li>
                  
                </li>
              }) : ''
            }
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
