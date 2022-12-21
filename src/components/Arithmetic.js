import React, { useState } from "react";
import "./Arithmetic.css";

  function Arithmetic() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  const handleFirst = (x) => setFirst(x.target.value);
  const handleSecond = (x) => setSecond(x.target.value);

  const handleMultiply = () => setResult(first * second);
  const handleDivide = () => setResult(first / second);
  const handleAddition = () => setResult(Number(first) + Number(second));
  const handleSubtraction = () => setResult(first - second);



  const clear = () => {
    setFirst(0);
    setSecond(0);
    setResult(0);
  };

  return (
    <React.Fragment>
      <h1>Arithmetic Operations</h1>
      <div class="app">
        <div class="container">
          <div>
            <label>First Number</label>
            <input
              onChange={handleFirst}
              type="number"
              value={first}
              name="first"
            />
          </div>

          <div>
            <label>Second Number</label>
            <input
              onChange={handleSecond}
              type="number"
              value={second}
              name="second"
              class="noscroll"
            />
          </div>

          <div>
            <button onClick={handleMultiply}>Multiply</button>
            <button onClick={handleDivide}>Divide</button>
            <button onClick={handleAddition}>Addition</button>
            <button onClick={handleSubtraction}>Subtraction</button>
            <button onClick={clear}>Clear All</button>
          </div>
          <div id="demo">The Result is: {result}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Arithmetic