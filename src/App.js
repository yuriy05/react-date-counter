import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const handleCountPlus = () => {
    step && setCount((prevState) => prevState + step);
  };

  const handleCountMinus = () => {
    step && setCount((prevState) => prevState - step);
  };

  return (
    <div className="wrapper">
      <div className="step">
        <input
          onChange={(e) => setStep(Number(e.target.value))}
          type="range"
          value={step}
          min={1}
          max={10}
        />
        <span>{step}</span>
      </div>

      <div className="count">
        <div className="counter-button" onClick={handleCountMinus}>
          <p>-</p>
        </div>
        <input
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
        />
        <div className="counter-button" onClick={handleCountPlus}>
          <p>+</p>
        </div>
      </div>
      <p>
        <span>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count >= 1
              ? `${count} days from today is ${date.toDateString()}`
              : count <= 1
                ? `${count} days ago was ${date.toDateString()}`
                : ``}
        </span>
      </p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
