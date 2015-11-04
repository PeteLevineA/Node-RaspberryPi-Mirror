"use strict";

var CurrentWeather = require('../src/components/currentWeather.jsx');
var WeatherIcon = require('../src/components/weatherIcon.jsx');
var chai = require('chai');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
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
		var item = TestUtils.renderIntoDocument(
			<CurrentWeather weather={weather} />	
		);
		
		var temp = ReactDOM.findDOMNode(item.refs.temp);
		var precip = ReactDOM.findDOMNode(item.refs.precip);
		var humidity = ReactDOM.findDOMNode(item.refs.humidity);
		var wind = ReactDOM.findDOMNode(item.refs.wind);
		
		expect(temp.textContent).to.equal(weather.tempF + '°');
		expect(precip.textContent).to.equal(weather.precip.toString());
		expect(humidity.textContent).to.equal(weather.humidity.toString());
		expect(wind.textContent).to.equal(weather.wind.toString());
    });
	it('should display a child sunny icon', function() {
		var weather = TEST_SUNNY_WEATHER;
		var item = TestUtils.renderIntoDocument(
			<CurrentWeather weather={weather} />
		);
		var items = TestUtils.scryRenderedComponentsWithType(item, WeatherIcon);
				
		expect(items.length).to.equal(1);
	});
});