import "./style.css";
import { getWeatherData } from "./service/api.js";
import { insertDataInHtml } from "./dom/dom.js";

const inputCity = document.querySelector(".city_name");
const weatherSearchForm = document.querySelector(".weather_search");
let city = "jabalpur";
// Handle city name search
const cityNameSearching = async (e) => {
	e.preventDefault();
	city = inputCity.value.trim();
	if (city) {
		const apiData = await getWeatherData(city);

		if (apiData) {
			insertDataInHtml(apiData);
		}
	} else {
		alert("Please enter a city name");
	}
	inputCity.value = "";
};

weatherSearchForm.addEventListener("submit", cityNameSearching);
