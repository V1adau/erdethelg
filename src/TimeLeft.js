import React from "react";
import { answerEnum } from "./utils/timeUtils";
import {text} from "./utils/text";
import Countdown from "./Countdown";

const TimeLeft = ({ answer }) => {
  return (
    <div className="timeLeft fade-in">
      {getTimeLeftPre(answer.isItWeekend)}
      <Countdown answer={answer} />
      {getTimeLeftPost(answer.isItWeekend)}
    </div>
  );
};

const getTimeLeftPre = isItWeekend => {
  switch (isItWeekend) {
    case answerEnum.NO:
      return <h3>{text.noPre}</h3>;
    case answerEnum.SOON:
      return <h3>{text.soonPre}</h3>;
    case answerEnum.YES:
      return null;
    default:
      return null;
  }
};

const getTimeLeftPost = isItWeekend => {
  switch (isItWeekend) {
    case answerEnum.NO:
      return <h3>{text.noPost}</h3>;
    case answerEnum.SOON:
      return <h3>{text.soonPost}</h3>;
    case answerEnum.YES:
      return null;
    default:
      return null;
  }
};

export default TimeLeft;
