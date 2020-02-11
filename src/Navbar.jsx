import React from "react";

var align ={
  position: "left"
}
var navButton = {
    fontSize: "30px",
    borderRadius: "15%",
    backgroundColor: "rgba(0,0,0,0)",

    color: "white"
}

function Navbar(){
  return(
    <p style={align}><button style={navButton}>Find Your Market</button> <button style={navButton}>Home</button> <button style={navButton}>Seasonal Produce Guide</button></p>
  )
}

export default Navbar;
