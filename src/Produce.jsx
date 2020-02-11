import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <div>
    <p><h2><em>{props.month}</em></h2></p>
    <h3>{props.selection.map((crop) =>
    <li>{crop}</li>
  )}</h3>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,

};

export default Produce;
