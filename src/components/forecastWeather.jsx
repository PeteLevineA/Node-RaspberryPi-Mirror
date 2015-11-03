"use strict";

var React = require('react');
var ForecastItem = requre('./forecastItem.jsx');

var ForecastWeather = React.createClass({
	propTypes: {
		forecast: React.PropTypes.object
	},
	getDefaultProps: function() {
		return {
			forecast: [
				{ weather: 'loading', icon: '', tempF: 0 }
			]
		}
	},
	getInitialState: function() {
		
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return <div className="forecast" ref="forecast">
			{this.props.forecast.map(function(obj, i) {
				return <ForecastItem forecast={obj} />;
			})}
			</div>;
	}
});

module.exports = ForecastWeather;