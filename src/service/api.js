import { API_URL, API_KEY } from "./config.js";

// Fetch weather data from the OpenWeatherMap API
export const getWeatherData = async (city) => {
	const weatherUrl = `${API_URL}?q=${city}&APPID=${API_KEY}`;

	try {
		const response = await fetch(weatherUrl);
		if (!response.ok) {
			throw new Error(
				`Error: ${response.status} ${response.statusText}`
			);
		}
		const data = await response.json();
		if (data) {
			return data;
		}
	} catch (error) {
		console.error("Failed to fetch weather data:", error);
		throw error; // Rethrow the error for further handling
	}
};
