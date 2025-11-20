import { useState } from "react";
import "./index.css";

const LightBulb = ({ isOn, counter, blocked }) => {
  return (
    <div className={isOn && !blocked ? "container night" : "container"}>
      <div className="bulb-light">
        <div id="light" />
        <div id="bulb">
          <div className="bulb-top">
            <div className="reflection" />
          </div>
          <div className="bulb-middle-1" />
          <div className="bulb-middle-2" />
          <div className="bulb-middle-3" />
          <div className="bulb-bottom" />
        </div>

        <div id="base">
          <div className="screw-top" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-c" />
          <div className="screw-d" />
        </div>
        <p>{counter}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [x, setX] = useState(false);
  const [nr, setNr] = useState(0);
  const isLocked = nr >= 10 && !x;

  const handleClick = () => {
    !x && setNr((n) => n + 1);
    setX((p) => !p);
  };

  const handleReset = () => {
    setX(false);
    setNr(0);
  };

  isLocked && alert("enough...");

  return (
    <>
      <button onClick={handleClick} disabled={isLocked}>
        {!isLocked ? (x ? "OFF" : "ON") : "LOCKED"}
      </button>
      <button onClick={handleReset}>RESET</button>
      <LightBulb isOn={x} counter={nr} blocked={isLocked} />
    </>
  );
};

export default App;
