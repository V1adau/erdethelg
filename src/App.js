import React, { useState, useEffect } from "react";
import Answer from "./Answer";
import { answerEnum, isItWeekend } from "./utils/timeUtils";
import TimeLeft from "./TimeLeft";
import ConfettiGenerator from "confetti-js";

const confettiSettings = {
  max: "30",
  size: "1",
  animate: true,
  props: ["circle", "square", "triangle", "line"],
  colors: [
    [165, 104, 246],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126]
  ],
  clock: "30",
  rotate: true
};

const App = () => {
  const [answer, setAnswer] = useState(isItWeekend());

  useEffect(() => {
    const interval = setInterval(() => {
      setAnswer(isItWeekend());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  const confettiVisible =
    answer.isItWeekend !== answerEnum.YES ? "hiddenConfetti" : "";

  return (
    <div className="App">
      <canvas
        className={"confettiHolder " + confettiVisible}
        id="confetti-holder"
      />
      <header className="App-header">
        <Answer isItWeekend={answer.isItWeekend} />
        <TimeLeft answer={answer} />
      </header>
    </div>
  );
};

export default App;
