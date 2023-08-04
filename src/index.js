import React from "react";
import ReactDOM from "react-dom";
import * as mathFunctions from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{mathFunctions.add(1, 2)}</li>
    <li>{mathFunctions.multiply(2, 3)}</li>
    <li>{mathFunctions.subtract(7, 2)}</li>
    <li>{mathFunctions.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
