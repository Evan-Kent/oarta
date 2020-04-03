import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchWrapper } from './api';
import './models/Movie';

function App() {
  console.log("process env " + process.env.REACT_APP_LOTR_API_KEY);
  let data = fetchWrapper('/movie', { 'Authorization': `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`})
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
