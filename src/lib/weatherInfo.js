"use strict";

module.exports = function(weatherData) {
	return {
		tempF: weatherData.current_observation.temp_f,
		humidity: weatherData.current_observation.relative_humidity,
		wind: weatherData.current_observation.wind_string.toLowerCase(),
		precip: weatherData.current_observation.precip_today_string.toLowerCase(),
		text: weatherData.current_observation.weather.toLowerCase(),
		icon: weatherData.current_observation.icon.toLowerCase()
	}
};