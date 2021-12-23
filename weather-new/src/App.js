import "./App.css";
import Weather from "./pages/Weather.js";

const api = {
	key: "ae9e15e6e0d244b77e6afc4ea6c67a72",
	base: "https://api.openweathermap.org/data/2.5/",
};
function changeForecastType(evt) {
	setForecastType(evt);
	fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
		.then((res) => res.json())
		.then((result) => {
			setWeather(result);
			setQuery("");
			setCityFound(true);
			console.log(result);

			result.cod && result.cod === "404" && setForecast(null);
			result.cod && result.cod === "404" && setCityFound(false);
			result.cod &&
				result.cod !== "404" &&
				fetch(
					`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&exclude=minutely,daily&appid=ae9e15e6e0d244b77e6afc4ea6c67a72`
				)
					.then((res) => res.json())
					.then((result) => {
						setForecast(result.hourly);
						console.log(result);
					});
		});
}

const search = (evt) => {
	if (evt.key === "Enter") {
		fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
			.then((res) => res.json())
			.then((result) => {
				setWeather(result);
				setCity(query);
				setQuery("");
				setCityFound(true);
				console.log(result);

				result.cod && result.cod === "404" && setForecast(null);
				result.cod && result.cod === "404" && setCityFound(false);
				result.cod &&
					result.cod !== "404" &&
					fetch(
						`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&exclude=minutely,hourly&appid=ae9e15e6e0d244b77e6afc4ea6c67a72`
					)
						.then((res) => res.json())
						.then((result) => {
							setForecast(result.daily);
							console.log(result);
						});
			});
	}
};

const dateBuilder = (d) => {
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} ${date} ${month} ${year}`;
};
function App() {
	return (
		<div className='app'>
			<Weather />
		</div>
	);
}

export default App;
