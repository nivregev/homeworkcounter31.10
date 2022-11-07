import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Counter from "./components/counter";
import CounterBonus from "./components/counterBonus";

const x = [
  { from: Number.MIN_SAFE_INTEGER, to: -15, color: "pink" },
  { from: -15, to: 0, color: "red" },
  { from: 0, to: 5, color: "gold" },
  { from: 6, to: 10, color: "orange" },
  { from: 11, to: 15, color: "green" },
  { from: 15, to: Number.MAX_SAFE_INTEGER, color: "green" },
];

function App() {
  return (
    <div className="text-center">
      <Counter max={15} min={-15} initial={0} steps={1}></Counter>
      <CounterBonus max={15} min={-15} initial={0} steps={1} />
    </div>
  );
}

export default App;
