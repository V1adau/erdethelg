import React from "react";
import { answerEnum, padNumber } from "./utils/timeUtils";
import CountdownLabel from "./CountdownLabel";
import {text} from "./utils/text";

const Countdown = ({ answer }) => {
  if (answer.isItWeekend === answerEnum.YES) {
    return null;
  }

  return (
    <div className="countdown">
      {answer.timeLeft.days > 0 && (
        <CountdownLabel timeLeft={answer.timeLeft.days} label={text.days} />
      )}

      <CountdownLabel
        timeLeft={padNumber(answer.timeLeft.hours)}
        label={text.hours}
      />
      <CountdownLabel
        timeLeft={padNumber(answer.timeLeft.minutes)}
        label={text.minutes}
      />
      <CountdownLabel
        timeLeft={padNumber(answer.timeLeft.seconds)}
        label={text.seconds}
      />
    </div>
  );
};

export default Countdown;
