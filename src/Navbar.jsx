import React from "react";

var align ={
  position: "left"
}
var navButton = {
  fontFamily: 'Fira Sans',
  fontSize: "30px",
  borderRadius: "50%",
  backgroundColor: "rgba(0,0,0,0)",
  margin: "1%",
  color: "#663300"
  
}

function Navbar(){
  return(
    <p style={align}><button style={navButton}>Find Your Market</button> <button style={navButton}>Home</button> <button style={navButton}>Seasonal Produce Guide</button></p>
  )
}

export default Navbar;
