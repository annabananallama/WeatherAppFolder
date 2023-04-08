function formatDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  const currentDayOfWeek = daysOfWeek[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  let h4 = document.querySelector("h4");

  h4.innerHTML = `${currentDayOfWeek} ${hours}:${minutes}`;
}

formatDate();

const form = document.querySelector("form");
const locationInput = document.getElementById("locationInput");
const cityName = document.getElementById("cityName");
const searchBtn = document.querySelector("button");

function updateCityName() {
  const location = locationInput.value;
  cityName.textContent = location;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCityName();
});

searchBtn.addEventListener("click", () => {
  updateCityName();
});

locationInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    updateCityName();
  }
});

let currentTempCelsius = 7;
let currentTempFahrenheit = Math.round((currentTempCelsius * 9) / 5 + 32);

const currentTemp = document.querySelector(".current-temp");
currentTemp.innerHTML = `<strong>Temperature:</strong></br>${currentTempCelsius}°C`;

const h5 = document.querySelector("h5");
let isCelsius = true;

h5.addEventListener("click", () => {
  if (isCelsius) {
    currentTemp.innerHTML = `<strong>Temperature:</strong></br>${currentTempFahrenheit}°F`;
    isCelsius = false;
  } else {
    currentTemp.innerHTML = `<strong>Temperature:</strong></br>${currentTempCelsius}°C`;
    isCelsius = true;
  }
});
