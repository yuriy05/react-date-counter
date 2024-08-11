import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountPlus = () => {
    step && setCount((prevState) => prevState + step);
  };

  const handleCountMinus = () => {
    step && setCount((prevState) => prevState - step);
  };

  const handleStepPlus = () => {
    setStep((prevState) => prevState + 1);
  };

  const handleStepMinus = () => {
    setStep((prevState) => prevState - 1);
  };

  return (
    <div className="wrapper">
      <div className="step">
        <div className="counter-button" onClick={handleStepMinus}>
          <p>-</p>
        </div>
        <p>Step: {step}</p>
        <div className="counter-button" onClick={handleStepPlus}>
          <p>+</p>
        </div>
      </div>

      <div className="count">
        <div className="counter-button" onClick={handleCountMinus}>
          <p>-</p>
        </div>
        <p>Count: {count}</p>
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
    </div>
  );
}

export default App;
