import React from "react";

const CountdownLabel = ({ timeLeft, label }) => (
  <div className="clock-container">
    <span className="days clock-label">{timeLeft}</span>
    <div className="clock-small-text">{label}</div>
  </div>
);

export default CountdownLabel;
