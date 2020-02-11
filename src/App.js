import React from 'react';
import Farmers from './Farmers.jpg';
import './App.css';
import Navbar from './Navbar.jsx';
import MarketList from './MarketList.jsx';
import AboutUs from './AboutUs.jsx';

var leftColumn = {
  width: "31%",
  border: "2px solid",
  // borderRadius: "15%",
  borderColor: "brown",
  position: "absolute",
  left: "1.5%"
}

var centerColumn = {
  width: "31%",
  border: "2px solid",
  borderRadius: "15%",
  borderColor: "brown",
  position: "absolute",
  left: "35%",
  zIndex: "+1"
}

var rightColumn = {
  width: "31%",
  border: "2px solid",
  // borderRadius: "15%",
  borderColor: "brown",
  position: "absolute",
  left: "67.5%"

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span className="navBar"><Navbar/></span>
      <div className="row">
        <div style={leftColumn}>
          <MarketList/>
        </div>
        <div style={centerColumn}>
          <AboutUs/>
        </div>
        <div style={rightColumn}>
          <MarketList/>
        </div>
      </div>
        <img src={Farmers} className="FarmersHeader" alt="logo" />
      </header>
    </div>
  );
}



export default App;
