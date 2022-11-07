import { useState } from "react";
import ClassifyNumbersByColors from "./classifyNumbersByColors";

const Counter = ({ max, min, initial, steps }) => {
  const [stepsByChoice, setSteps] = useState(steps);
  const [counterNumber, setChangedNumber] = useState(initial);

  const isNotAtMax = counterNumber + steps >= min;
  const isNotAtMin = counterNumber - steps <= max;

  const add = () => {
    if (isNotAtMax) {
      setChangedNumber((counterNumber) => counterNumber + stepsByChoice);
    }
  };

  const subtract = () => {
    if (isNotAtMin) {
      setChangedNumber((counterNumber) => counterNumber - stepsByChoice);
    }
  };

  return (
    <div className="mx-3">
      <div className=" mt-2">
        <h2 className="text-decoration-underline">Counter By Niv</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          disabled={counterNumber >= max}
          onClick={add}
          className="px-3 btn btn-success border-dark  fs-3"
        >
          +
        </button>
        <span className="mx-2 px-3 py-1 border border-primary border-4 rounded-3 bg-dark text-white fs-3">
          {counterNumber}
        </span>
        <button
          disabled={counterNumber <= min}
          onClick={subtract}
          className="px-3 btn btn-danger border-dark fs-3"
        >
          -
        </button>
      </div>
      <div className="my-3 fs-4">
        <ClassifyNumbersByColors max={15} min={-15} number={counterNumber} />
      </div>
      {/* <div>
        <label>chose the jumps between numbers: </label>
        <input
          type="number"
          onInput={(e) => setSteps(Number(e.target.value))}
        />
      </div> */}
    </div>
  );
};
export default Counter;
