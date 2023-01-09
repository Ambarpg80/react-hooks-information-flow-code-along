import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor , color }) {
  function handleClick(){
    const AnotherRandomColor = getRandomColor();
    onChangeColor(AnotherRandomColor)
  }
  


  return <div className="child" style={{ backgroundColor: color }}  onClick={handleClick}/>;
}

export default Child;
