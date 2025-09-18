import { getCountryName, getDateTime } from "../utils/utils.js";
const weatherCitySearch = document.querySelector(".weather_city");
const weatherDateTime = document.querySelector(".weather_date_time");
const weatherIcon = document.querySelector(".weather_icon");
const weatherTemperature = document.querySelector(".weather_temperature");
const weatherMin = document.querySelector(".weather_min");
const weatherMax = document.querySelector(".weather_max");
const weatherForecast = document.querySelector(".weather_forecast");
const weatherHumidity = document.querySelector(".weather_humidity");
const weatherWind = document.querySelector(".weather_wind");
const weatherFeelsLike = document.querySelector(".weather_feelsLike");
const weatherPressure = document.querySelector(".weather_pressure");

const insertDataInHtml = (apiData) => {
	const { name, sys, main, weather, wind, dt } = apiData;
	weatherCitySearch.innerHTML = `${name}, ${getCountryName(sys.country)}`;
	weatherDateTime.innerHTML = getDateTime(dt);
	weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" alt="icon">`;
	weatherTemperature.innerHTML = `${main.temp.toFixed()} &#176`;
	weatherMin.innerHTML = `min : ${main.temp_min.toFixed()} &#176`;
	weatherMax.innerHTML = `max : ${main.temp_max.toFixed()} &#176`;
	weatherForecast.innerHTML = weather[0].main;
	weatherWind.innerHTML = wind.speed + " m/s";
	weatherFeelsLike.innerHTML = main.feels_like + " &#176";
	weatherHumidity.innerHTML = main.humidity + " &#37";
	weatherPressure.innerHTML = `${main.pressure} hpa`;
};

export { insertDataInHtml };
