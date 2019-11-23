const isItWeekend = () => {
  const now = new Date();

  if (now.getDay() == 6 || now.getDay() == 7) {
    itIsWeekend();
    return;
  }

  const deadline = getWeekendStartDay();
  const sameDay = isSameDay(now, deadline);

  if (sameDay && deadline.getTime() < now.getTime()) {
    itIsWeekend();
    return;
  }

  if (sameDay) {
    itIsSoonWeekend();
  } else {
    itIsNotWeekend();
  }

  initializeClock("countdown", deadline);
};

const itIsWeekend = () => {
  document.getElementById("no").style.display = "none";
  document.getElementById("no").classList.remove("fade-in");
  document.getElementById("soon").style.display = "none";
  document.getElementById("soon").classList.remove("fade-in");
  document.getElementById("countdownContainer").style.display = "none";
  document.getElementById("countdownContainer").classList.remove("fade-in");

  document.getElementById("yes").style.display = "block";
  document.getElementById("yes").classList.add("fade-in");

  document.getElementById("pyro-start").style.display = "block";
  document.getElementById("pyro-end").style.display = "block";
};

const itIsNotWeekend = () => {
  document.getElementById("yes").style.display = "none";
  document.getElementById("yes").classList.remove("fade-in");
  document.getElementById("soon").style.display = "none";
  document.getElementById("soon").classList.remove("fade-in");

  document.getElementById("no").style.display = "block";
  document.getElementById("no").classList.add("fade-in");
  document.getElementById("countdownContainer").style.display = "flex";
  document.getElementById("countdownContainer").classList.add("fade-in");
  document.getElementById("daysContainer").style.display = "inline-block";

  document.getElementById("explanationPre").innerText = "Det er fremdeles";
  document.getElementById("explanationPost").innerText = "igjen til helg...";

  document.getElementById("pyro-start").style.display = "hidden";
  document.getElementById("pyro-end").style.display = "hidden";
};

const itIsSoonWeekend = () => {
  document.getElementById("yes").style.display = "none";
  document.getElementById("yes").classList.remove("fade-in");
  document.getElementById("no").style.display = "none";
  document.getElementById("no").classList.remove("fade-in");
  document.getElementById("daysContainer").style.display = "none";

  document.getElementById("soon").style.display = "block";
  document.getElementById("soon").classList.add("fade-in");
  document.getElementById("countdownContainer").style.display = "flex";
  document.getElementById("countdownContainer").classList.add("fade-in");

  document.getElementById("explanationPre").innerText = "Det er bare";
  document.getElementById("explanationPost").innerText = "igjen til helg!";

  document.getElementById("pyro-start").style.display = "hidden";
  document.getElementById("pyro-end").style.display = "hidden";
};

const getWeekendStartDay = (dayOfWeek, hours, minutes) => {
  if (dayOfWeek === undefined) {
    dayOfWeek = 5;
  }

  if (hours === undefined) {
    hours = 17;
  }

  if (minutes === undefined) {
    minutes = 0;
  }

  var resultDate = new Date();
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
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

const initializeClock = (id, endTime) => {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  const updateClock = () => {
    const t = getTimeRemaining(endTime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeInterval);
      itIsWeekend();
    }
  };

  updateClock();
  const timeInterval = setInterval(updateClock, 1000);
};

const isSameDay = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
