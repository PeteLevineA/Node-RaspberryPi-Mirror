"use strict";

var CurrentWeather = require('../src/components/currentWeather.jsx');
var WeatherIcon = require('../src/components/weatherIcon.jsx');
var chai = require('chai');
var React = require('react');
var expect = chai.expect;

chai.should();

var TEST_WEATHER = {
	tempF: 0,
	humidity: 0,
	wind: 0,
	precip: 0,
	text: 'loading',
	icon: ''
};
var TEST_SUNNY_WEATHER = {
	tempF: 70,
	humidity: 0,
	wind: 0,
	precip: 0,
	text: 'sunny',
	icon: 'sunny'
}
describe('Weather Component', function () {
    it('should display weather details', function () {
        var weather = TEST_WEATHER;
		var item = React.addons.TestUtils.renderIntoDocument(
			<CurrentWeather weather={weather} />	
		);
		
		var temp = React.findDOMNode(item.refs.temp);
		var precip = React.findDOMNode(item.refs.precip);
		var humidity = React.findDOMNode(item.refs.humidity);
		var wind = React.findDOMNode(item.refs.wind);
		
		expect(temp.textContent).to.equal(weather.tempF + '°');
		expect(precip.textContent).to.equal(weather.precip);
		expect(humidity.textContent).to.equal(weather.humidity);
		expect(wind.textContent).to.equal(weather.wind);
    });
	it('should display a child sunny icon', function() {
		var weather = TEST_SUNNY_WEATHER;
		var item = React.addons.TestUtils.renderIntoDocument(
			<CurrentWeather weather={weather} />
		);
		var weatherIcon = React.scryRenderedComponentsWithType(item, WeatherIcon);
		
		var icon = weatherIcon.findDOMNode(weatherIcon.refs.icon);
		
		expect(icon.length).to.equal(1);
	});
});