import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const fetchData  = ()=>{
    // const playerApi = 'https://www.balldontlie.io/api/v1/players/237';
    // const playerPic = 'https://nba-players.herokuapp.com/players/james/lebron';

    const getNBAPlayer  = axios.get(playerApi);
    const getPlayerPic = axios.get(playerPic);
    axios.all([getNBAPlayer,getPlayerPic]).then(
      axios.spread((...allData)=>{
        const allDataPlayer = allData[0];
        const getNBAPlayer = allData[1];

        console.log(allDataPlayer);
        console.log(getNBAPlayer);
      })
    )
  }

  useEffect(()=>{
    fetchData()
  },[])
  
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


