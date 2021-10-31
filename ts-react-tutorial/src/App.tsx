import React, { useState, MouseEvent } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const increase = (e: MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      setNum((num) => num + 1);
    }
  };

  const decrease = (e: MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      setNum((num) => num - 1);
    }
  };

  const onOff = (e: MouseEvent) => {
    e.preventDefault();
    setDisabled(!disabled);
  };

  return (
    <div className="App">
      <p>{num}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={onOff} className={disabled ? "disabled" : undefined}>
        ON/OFF
      </button>
    </div>
  );
}

export default App;
