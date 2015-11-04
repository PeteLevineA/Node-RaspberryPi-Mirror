"use strict";

var React = require('react');
var WeatherIcon = require('./weatherIcon.jsx');

var CurrentWeather = React.createClass({
	propTypes: {
		weather: React.PropTypes.object
	},
	getDefaultProps: function() {
		return {
			tempF: 0,
			humidity: 0,
			wind: 0,
			precip: 0,
			text: 'loading',
			icon: ''
		};
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return <div className="currentWeather">
            <div className="weatherImage">
				<WeatherIcon ref="icon" weather={this.props.weather.text} icon={this.props.weather.icon} />
			</div>
            <div className="weatherTemp" ref="temp">{this.props.weather.tempF}°</div>
            <div>
                <span className="lightTitle">precip</span>
                <span className="precipitation" ref="precip">{this.props.weather.precip}</span>
                <br />
                <span className="lightTitle">humidity</span>
                <span className="humidity" ref="humidity">{this.props.weather.humidity}</span>
                <br />
                <span className="lightTitle">wind</span>
                <span className="wind" ref="wind">{this.props.weather.wind}</span>
            </div>
        </div>;
	}
});

module.exports = CurrentWeather;