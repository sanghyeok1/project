const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
// todoList 는 돔엘리먼트여서 .children 이런식으로 할 수 있다
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));
// 문자열로 뽑아내면 안되니까 원본 데이터로 만드는 JSON.parse

const createTodo = function (storageDate) {
  // storageDate 를 매개변수로 쓰는이유
  let todoContents = todoInput.value;
  if (storageDate) {
    todoContents = storageDate.contents;
  }
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });
  // 한번클릭시 li에 complete클래스가 생기고 한번더 누르면 없어짐
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });
  // 더블클릭시 li가 사라짐
  if (storageDate?.complete) {
    // undefined에는 .complete를 찾을수 없으니 에러  뒤에?붙이면
    // undefined경우 .complete를 찾지않는다
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    // .trim() 공백없애기
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  // if (saveItems.length === 0) {
  //   localStorage.removeItem("saved-items");
  // } else {
  //   localStorage.setItem("saved-items", JSON.stringify(saveItems));
  // }
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
  // console.log(String(saveItems)); 이렇게 하면 안되고
  // 객체 데이터 저장할때  제이슨사용  문자인지 확인하는건 앞에 typeof
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");

  locationNameTag.textContent = location;

  document.body.style.backgroundImage = `url('./images/${weather}.jpg')`;

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = function (position) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=8219036aa3aab9497d64d93143034c6a`
    // 인강에선 data뒤에3.0을 2.5로 바꾸니까 해결  나는 그대로 ㅠㅠ
  )
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((json) => {
      // console.log(json);
      console.log(json.name, json.weather[0].main);
      // let result = `오늘 ${json.name} 날씨는 ${json.weather[0].description}`;
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.log(err);
    });
  // then()은 응답이 올때까지 기다려주는거
};

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  console.log(latitude, longitude);
  //shorthand propery
  const positionObj = {
    latitude,
    longitude,
  };

  weatherSearch(positionObj);
};

// MDN에서 navigator.geolocation 사용방법

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (error) => {
    console.log(error);
  });
};
askForLocation();
if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}

// 자바스크립트에서 비동기가 가능한 이유

//스프레드 연산자  배열,객체 둘다가능
//const copy = JSON.stringify() / const deepCopy = JSON.parse(copy)
