import React, { useState, useEffect } from 'react';
import './App.css';

import { Navigation, Canvas, Login } from './components'

function App() {
  // const [books, setBooks] = useState(null)
  // // const [chapters, setChapters] = useState(null)
  // // const [characters, setCharacters] = useState(null)
  // // const [movies, setMovies] = useState(null)
  // // const [quotes, setQuotes] = useState(null)

  
  // useEffect(() => {
  //   let ignore = false;
  //   if (!ignore) 
  //   {
  //     // api.getBooks(setBooks)
  //     // api.getChapters(setChapters)
  //     // api.getCharacters(setCharacters)
  //     //api.getMovies(setMovies)
  //     // api.getQuotes(setQuotes)
  //   }
  //   return () => { ignore = true; }
  // }, [])
  const [authenticated, setAuthenticated] = useState(false)

  let app = authenticated ? <Canvas /> : <Login setAuth={value => setAuthenticated(value)}/>
  console.log(app)
  return (
    <>
      { authenticated ? <Navigation /> : ''}
      <main className="app-canvas">
      {
        app
      }
      </main>
    </>
  );
}

export default App;
