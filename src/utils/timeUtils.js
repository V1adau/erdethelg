export const answerEnum = {
  YES: "yes",
  NO: "no",
  SOON: "soon"
};

export const isItWeekend = () => {
  const now = new Date();

  const weekendTime = {
    isItWeekend: answerEnum.YES,
    timeLeft: null
  };

  // Is it saturday or sunday?
  if (now.getDay() === 6 || now.getDay() === 0) {
    return weekendTime;
  }

  const deadline = getWeekendStartDay();
  const sameDay = isSameDay(now, deadline);

  if (sameDay && deadline.getTime() <= now.getTime()) {
    return weekendTime;
  }

  const timeRemaining = getTimeRemaining(deadline);

  if (sumRemaining(timeRemaining) <= 0) {
    return weekendTime;
  }

  weekendTime.timeLeft = timeRemaining;

  if (sameDay) {
    weekendTime.isItWeekend = answerEnum.SOON;
  } else {
    weekendTime.isItWeekend = answerEnum.NO;
  }

  return weekendTime;
};

const getWeekendStartDay = (dayOfWeek, hours, minutes) => {
  if (dayOfWeek === undefined) {
    dayOfWeek = 5;
  }

  if (hours === undefined) {
    hours = 16;
  }

  if (minutes === undefined) {
    minutes = 0;
  }

  const resultDate = new Date();
  resultDate.setDate(
    resultDate.getDate() + ((7 + dayOfWeek - resultDate.getDay()) % 7)
  );
  resultDate.setHours(hours, minutes, 0, 0);

  return resultDate;
};

const getTimeRemaining = endTime => {
  const t = Date.parse(endTime) - new Date();
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

const isSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const sumRemaining = timeRemaining =>
  timeRemaining.seconds +
  timeRemaining.minutes +
  timeRemaining.hours +
  timeRemaining.days;

export const padNumber = number => ("0" + number).slice(-2);
