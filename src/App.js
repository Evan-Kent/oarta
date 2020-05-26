import React, { useState, useEffect } from 'react';
import './App.css';
import defaultDashboards from './utilities/default-dashboard'
import { Navigation, DashboardList, Login } from './components'

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
  const [app, setApp] = useState(<DashboardList dashboards={defaultDashboards}/>)
  let _app = authenticated ? app : <Login setAuth={ value => setAuthenticated(value) }/>
  console.log(app)
  return (
    <>
      { authenticated ? <Navigation currentApp={ app => setApp(app) }/> : ''}
      <main className="app-canvas">
      {
        _app
      }
      </main>
    </>
  );
}

export default App;
