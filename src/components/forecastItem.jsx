"use strict";

var React = require('react');
var WeatherIcon = require('./weatherIcon.jsx');

var ForecastItem = React.createClass({
	propTypes: {
		forecast: React.PropTypes.object
	},
	getDefaultProps: function() {
		return {
			forecast: { weather: 'loading', icon: '', tempF: 0 }
		}
	},
	getInitialState: function() {
		
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return <div className="day" key={obj.icon + i}>
					<span ref="forecastNumber">+{i+1}</span>
					<WeatherIcon weather={obj.weather} icon={obj.icon} />
					<span className="weatherTemp" ref="temp">{obj.tempF}°</span>
				</div>;
	}
});

module.exports = ForecastItem;