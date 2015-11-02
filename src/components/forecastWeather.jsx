"use strict";

var React = require('react');
var WeatherIcon = require('./weatherIcon.jsx');
var fetch = require('node-fetch');
var config = require('../config/config.json');
var ForecastInfo = require('../lib/forecastInfo.js');

var ForecastWeather = React.createClass({
	getDefaultProps: function() {
	
	},
	getInitialState: function() {
		return {
			forecast: [
				{tempF: "loading", weather: "", icon: ""},
				{tempF: "loading", weather: "", icon: ""},
				{tempF: "loading", weather: "", icon: ""}
			]
		};
	},
	componentDidMount: function() {
		var self = this;
		// fetch is a window.fetch pollyfill with promises
		fetch(config.urls.forecast)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				self.loadForecast(json);
			})
			.catch(function(response) {
				console.log(response);
				self.setState({
					forecast: [
						{ tempF: "failed", weather: "", icon: "" }
					]
				});
			});
	},
	loadForecast: function(forecastData) {
		this.setState({
			forecast: ForecastInfo(forecastData)
		});			
	},
	render: function() {
		return <div className="forecast">
			{this.state.forecast.map(function(obj, i) {
				return <div className="day" key={obj.icon + i}>
						<span>+{i+1}</span>
						<WeatherIcon weather={obj.weather} icon={obj.icon} />
						<span className="weatherTemp">{obj.tempF}°</span>
					</div>;
			})}
			</div>;
	}
});

module.exports = ForecastWeather;