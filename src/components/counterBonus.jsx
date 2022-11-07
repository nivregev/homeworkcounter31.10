import { useState } from "react";

const CounterBonus = (props) => {
  const [stepsByChoice, setSteps] = useState();
  const [initialNumber, setInitialNumber] = useState();
  const [minNumber, setMinNumber] = useState();
  const [maxNumber, setMaxNumber] = useState();

  return (
    <div className="mx-3">
      <div className=" mt-2">
        <h2 className="text-decoration-underline">CounterBonus By Niv</h2>
      </div>
      <div className="mt-3">
        <input
          onInput={(e) => setMinNumber(Number(e.target.value))}
          className="mx-1"
          type="number"
          placeholder="minimum number"
        />

        <input
          onClick={(e) => setMaxNumber(Number(e.target.value))}
          className="mx-1"
          type="number"
          placeholder="maximum number"
        />

        <input
          onClick={(e) => setInitialNumber(Number(e.target.value))}
          className="mx-1"
          type="number"
          placeholder="initial"
        />

        <input
          onClick={(e) => setSteps(Number(e.target.value))}
          className="mx-1"
          type="number"
          placeholder="steps"
        />
      </div>
      <div className="mt-3">
        <h3>here is your array:</h3>
        <ul></ul>
      </div>
    </div>
  );
};
export default CounterBonus;
