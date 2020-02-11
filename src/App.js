import React from 'react';
import Farmers from './Farmers.jpg';
import './App.css';
import Navbar from './Navbar.jsx';
import MarketList from './MarketList.jsx';
import AboutUs from './AboutUs.jsx';
import ProduceList from './ProduceList.jsx';


var leftColumn = {
  width: "31%",
  border: "2px solid",
  // borderRadius: "5%",
  borderColor: "green",
  position: "absolute",
  left: "1.5%",
  height: "898px",
}

var centerColumn = {
  marginTop: "7%",
  width: "31%",
  border: "4px solid",
  borderRadius: "40%",
  borderColor: "green",
  position: "absolute",
  left: "34.5%",
  zIndex: "+1"
}

var rightColumn = {
  width: "31%",
  border: "2px solid",
  // borderRadius: "5%",
  borderColor: "green",
  position: "absolute",
  left: "67.5%",
  height: "898px",
}
var dirtStyle = {
  color: "#663300",
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={dirtStyle}>Danny Dirtfarmer's practical produce</h1>
      <span className="navBar"><Navbar/></span>
      <div className="row">
        <div style={leftColumn}>
          <MarketList/>
        </div>
        <div style={centerColumn}>
          <AboutUs/>
        </div>
        <div style={rightColumn}>
        <ProduceList/>
        </div>
      </div>
        <img src={Farmers} className="FarmersHeader" alt="logo" />
      </header>
    </div>
  );
}



export default App;
