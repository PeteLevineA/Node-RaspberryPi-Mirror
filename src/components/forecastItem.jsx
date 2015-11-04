"use strict";

var React = require('react');
var WeatherIcon = require('./weatherIcon.jsx');

var ForecastItem = React.createClass({
	propTypes: {
		forecast: React.PropTypes.object,
		index: React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			forecast: { weather: 'loading', icon: '', tempF: 0 },
			index: 0
		}
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return <div className="day">
					<span ref="forecastNumber">+{this.props.index+1}</span>
					<WeatherIcon weather={this.props.forecast.weather} icon={this.props.forecast.icon} />
					<span className="weatherTemp" ref="temp">{this.props.forecast.tempF}°</span>
				</div>;
	}
});

module.exports = ForecastItem;