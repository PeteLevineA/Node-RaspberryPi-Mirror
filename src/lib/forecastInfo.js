"use strict";

var WeatherInfo = require('./weatherInfo.js');

module.exports = function(forecastData) {
	var forecastInfo = forecastData.forecast.simpleforecast.forecastday.filter(filterFirst).map(function(obj, i) {
		var forecast = {
			tempF: obj.high.fahrenheit,
			weather: obj.conditions,
			icon: obj.icon
		};
		return forecast;
	});	
	return forecastInfo;
};

var filterFirst = function(args, i) {
	if( i == 0 ) {
		return false;
	}
	return true;	
}