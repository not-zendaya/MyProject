function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".currentCity");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = searchInput.value;
  let apiKey = "c73bde3obcbtea944679949f5e0620ff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${day} ${hours}:${minutes}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
let selectcurrentDetails = document.querySelector(".currentDetails");
let newDate = formatDate();
selectcurrentDetails.innerHTML = `${newDate} , moderate rain<br />
  Humidity:<strong>87%</strong>, Wind:<strong>7.2Km/h</strong><br />`;
