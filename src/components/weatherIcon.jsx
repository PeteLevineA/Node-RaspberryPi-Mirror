"use strict";

var React = require('react');

var WeatherIcon = React.createClass({
	propTypes: {
		weather: React.PropTypes.string,
		icon: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			weather: 'sunny',
			icon: ''
		};
	},
	render: function() {
		var weatherImage = "";
		var weather = this.props.weather.toLowerCase();
		var icon = this.props.icon.toLowerCase();
		if (weather.indexOf('partly') > -1 || icon.indexOf('partly') > -1) {
			weatherImage = 'images/partlycloudy.svg';
		}
		else if (weather.indexOf('overcast') > -1 || weather.indexOf('cloudy') > -1 || icon.indexOf('cloudy') > -1) {
			weatherImage = 'images/cloudy.svg';
		}
		else if (weather.indexOf('rain') > -1 || weather.indexOf('rain') > -1 || icon.indexOf('rain') > -1) {
			weatherImage = 'images/rain.svg';
		}
		else if (weather.indexOf('snow') > -1 || weather.indexOf('snow') > -1 || icon.indexOf('snow') > -1) {
			weatherImage = 'images/snow.svg';
		}
		else if (weather.indexOf('wind') > -1 || weather.indexOf('wind') > -1 || icon.indexOf('wind') > -1) {
			weatherImage = 'images/windy.svg';
		}
		else {
			weatherImage = 'images/sunny.svg';
		}
		return <img src={weatherImage} title={this.props.weather} />;
	}
});

module.exports = WeatherIcon;