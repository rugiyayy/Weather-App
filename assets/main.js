let cityForm = document.querySelector(".city_form");
let searchInput = cityForm.elements["search-input"];

let searchButton = cityForm.elements["search-button"];

let displaidCity = document.querySelector(".displaid_city");
let displaidTemp = document.querySelector(".temp");
let displaidWind = document.querySelector(".wind");
let displaidHumidity = document.querySelector(".humidity");
let displaidPressure = document.querySelector(".pressure");
let displaidClouds = document.querySelector(".clouds");


// var weatherCond=document.querySelector('#clouds');




let apiKey = `73e2095522e2178dfc90ed150944114a`;

cityForm.addEventListener("submit", Click); /// i cant add addEventListener to searchButton !??!! why //why "click" event doesn't work ??


function Click(e) {
  e.preventDefault();
  let searchInputvl = e.target["search-input"].value;
  console.log(searchInputvl);

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputvl}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) =>
      Show({
        clouds: data.weather[0].description,
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        cityName: data.name,
        wind: data.wind.speed,
      })
    );
}



function Show(weatherDannie) {
  displaidCity.innerHTML = weatherDannie.cityName;
  displaidTemp.innerHTML = Math.floor(weatherDannie.temp) + " °C";
  displaidClouds.innerHTML = weatherDannie.clouds;
  displaidHumidity.innerHTML = weatherDannie.humidity + "%";
  displaidPressure.innerHTML = weatherDannie.pressure;
  displaidWind.innerHTML = weatherDannie.wind + "km/h";







}


