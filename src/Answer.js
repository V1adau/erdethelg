import React from "react";
import { answerEnum } from "./utils/timeUtils";
import AnswerNo from "./AnswerNo";
import AnswerSoon from "./AnswerSoon";
import AnswerYes from "./AnswerYes";

const Answer = ({ isItWeekend }) => (
  <div className="answer">{getAnswer(isItWeekend)}</div>
);

const getAnswer = isItWeekend => {
  switch (isItWeekend) {
    case answerEnum.NO:
      return <AnswerNo />;
    case answerEnum.SOON:
      return <AnswerSoon />;
    case answerEnum.YES:
      return <AnswerYes/>;
    default:
      return null;
  }
};

export default Answer;
