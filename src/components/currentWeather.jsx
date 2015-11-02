"use strict";

var React = require('react');
var WeatherIcon = require('./weatherIcon.jsx');
var fetch = require('node-fetch');
var config = require('../config/config.json');
var WeatherInfo = require('../lib/weatherInfo.js');

var CurrentWeather = React.createClass({
	getDefaultProps: function() {
	
	},
	getInitialState: function() {
		return {
			tempF: "loading",
			humidity: "0",
			wind: "0",
			precip: "0",
			text: "sunny",
			icon: ""
		};
	},
	componentDidMount: function() {
		// fetch is a window.fetch pollyfill with promises
		var self = this;
		fetch(config.urls.weather)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				self.loadWeather(json);
			})
			.catch(function(response) {
				console.log(response);
				self.setState({
					tempF: "failed",
					humidity: "0",
					wind: "0",
					precip: "0",
					text: "sunny",
					icon: ""
				});
			});
	},
	loadWeather: function(weatherData) {
		var weatherInfo = WeatherInfo(weatherData);
		this.setState({
			tempF: weatherInfo.tempF,
			humidity: weatherInfo.humidity,
			wind: weatherInfo.wind,
			precip: weatherInfo.precip,
			text: weatherInfo.text,
			icon: weatherInfo.icon
		});
		
	},
	render: function() {
		return <div className="currentWeather">
            <div className="weatherImage">
				<WeatherIcon weather={this.state.text} icon={this.state.icon} />
			</div>
            <div className="weatherTemp">{this.state.tempF}°</div>
            <div>
                <span className="lightTitle">precip</span>
                <span className="precipitation">{this.state.precip}</span>
                <br />
                <span className="lightTitle">humidity</span>
                <span className="humidity">{this.state.humidity}</span>
                <br />
                <span className="lightTitle">wind</span>
                <span className="wind">{this.state.wind}</span>
            </div>
        </div>;
	}
});

module.exports = CurrentWeather;