import React from "react";
import "./index.css";

const App = ({ active, toggleStatus, delayToggleStatus }) => (
  <React.Fragment>
    <div className="main-div">
      <h1>Hello there! I'm {active ? "ACTIVE" : "INACTIVE"}</h1>
    </div>
    <button onClick={() => toggleStatus(!active)}>
      Click me to toggle status.
    </button>
    <button onClick={() => delayToggleStatus(!active)}>
      Click me to delay status.
    </button>
  </React.Fragment>
);

export default App;
