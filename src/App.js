import './App.css';
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [interval, setInterval] = useState(1);

  const handleCounterChange = (event) => {
    setInterval(Number(event.target.value));

  }

  const incrementCounter = () => {
    setCounter((prev) => prev + interval);
    // setCounter(counter+interval);
  }

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter((prev) => {
        if (prev - interval >= 0) {
          return prev - interval;
        } else {
          return 0;
        }
      });
    }
  }
  return <div className='container'>
    <h1>Counter Apps</h1>
    <p>counter: {counter}</p>
    <div className='inner'>
      <input type="number" value={interval} onChange={(event) => handleCounterChange(event)}></input>
      <p>Select Interval</p>
    </div>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
  </div>
};

export default App;
