//Npm start to run it.
//Put in the react folder after setting the route path , therefore path has to be reset to include folder.
// NEW PATH >>> Desktop/purple_beard/React/reactProject26th/bmicalcreact
// npm start again once bmicalcReact is reached.
import React, { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  //setState
  const [weight, setWeight] = useState(0); //setWeight(xyb) hook programmed such that props of setWeight gets updated in state to weight.
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState(""); //empty string initial state because we don't want '0' showing up.

  let imgSrc = "";

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1)); //here we are changing the state. toFixed() rounds it to 1 DP.
      //message logic, inside of above if as only relevant after this.
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else setMessage("You are overweight");
    }
  };
  let reload = () => {
    window.location.reload();
  };

  //Layout the JSX
  return (
    <div className="app">
      <div className="Container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)} //setting state to the new value.
            />
          </div>

          <div>
            <label>Height (Inches)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="Reload" onClick={reload} type="submit">
              Reload
            </button>
            <button className="btn btn-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
