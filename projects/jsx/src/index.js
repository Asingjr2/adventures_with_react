// Import the react and reactDom libaries
import React from "react";
import ReactDOM from "react-dom";


// Create a react component.
const App = function() {
  // return <div> HI THERE! </div>;
  const Samus = 'GREATEST'
  const newObject = { age: 91, name: "FREDO"}

  return (
    <div> 
      <label className="label" htmlFor="name">
      Enter the Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue',  color:'white' }}>{Samus} </button>

      <p>Obect age is {newObject.age}</p>
      <p>Object name is {newObject.name}</p>
    </div>
  )
};


// Display react component on screen.
// Required to render information to the screen.
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
