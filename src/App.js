import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigation, DashboardList, Login, Api } from './components'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [app, setApp] = useState(<DashboardList />)

  return (
    <>
      { authenticated ? <Navigation setApp={ app => setApp(app) }/> : ''}
      <main className="app-canvas">
      {
        authenticated ? <Api key={app.type}>{app}</Api> : <Login setAuth={ value => setAuthenticated(value) }/>
      }
      </main>
    </>
  );
}

export default App;
