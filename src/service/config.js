const API_URL =
	import.meta.env.VITE_API_URL ||
	"https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY || "";

export { API_URL, API_KEY };
