const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const saveDate = localStorage.getItem("saved-date");

const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  // 이렇게 한 이유가 뭐였드라 빽틱
  return dateFormat;
};

const countMaker = function (data) {
  if (data !== saveDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  // console.log(nowDate);
  // console.log(targetDate);
  // targetDate 랑 nowDate 가 뺄셈이 가능한 이유 ? sethours를 하면 날짜로 안나옴
  const remaining = (targetDate - nowDate) / 1000;
  // console.log(remaining);

  if (remaining === 0 || remaining < 0) {
    container.style.display = "none";
    messageContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
    messageContainer.style.display = "flex";
    setClearInterval();
    // setClearInterval()을 한 이유
    return;
  } else if (isNaN(remaining)) {
    // console.log('유효하지 않은 시간대입니다.');
    container.style.display = "none";
    messageContainer.innerHTML = `<h3>유효한 시간대가아닙니다.</h3>`;
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const documentObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  const documentArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainingObj);

  const format = function (time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };
  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    // document.getElementById(tag).textContent 여기가 html에 어딨는지
    i++;
  }
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval();

  countMaker(targetDateInput);
  const intervalId = setInterval(() => {
    countMaker(targetDateInput);
  }, 1000);
  intervalIdArr.push(intervalId);
  // for (let i = 0; i < 100; i++) {
  //   setTimeout(countMaker, 1000 * i);
  // }
  // () => { } 이거 한 이유 ??
};

const setClearInterval = function () {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.style.display = "flex";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";
  setClearInterval();
};

if (saveDate) {
  starter(saveDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
}
