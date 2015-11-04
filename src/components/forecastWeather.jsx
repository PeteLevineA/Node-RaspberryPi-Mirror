"use strict";

var React = require('react');
var ForecastItem = require('./forecastItem.jsx');

var ForecastWeather = React.createClass({
	propTypes: {
		forecast: React.PropTypes.array
	},
	getDefaultProps: function() {
		return {
			forecast: [
				{ weather: 'loading', icon: '', tempF: 0 }
			]
		}
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return <div className="forecast" ref="forecast">
			{this.props.forecast.map(function(obj, i) {
				var key = obj.weather.replace(/\s+/g, '') + i;
				return <ForecastItem key={key} forecast={obj} index={i} />;
			})}
			</div>;
	}
});

module.exports = ForecastWeather;