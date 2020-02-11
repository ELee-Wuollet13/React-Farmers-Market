import React from 'react';
import Farmers from './Farmers.jpg';
import './App.css';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span className="navBar"><Navbar/></span>
        <img src={Farmers} className="FarmersHeader" alt="logo" />
      </header>
    </div>
  );
}

export default App;
