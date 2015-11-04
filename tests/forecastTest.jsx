"use strict";

var ForecastWeather = require('../src/components/forecastWeather.jsx');
var ForecastItem = require('../src/components/forecastItem.jsx');
var chai = require('chai');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = chai.expect;

chai.should();

var TEST_FORECAST = [
	{ tempF: 70, weather: 'sunny', icon: 'sunny' },
	{ tempF: 60, weather: 'rainy', icon: 'rainy' },
	{ tempF: 70, weather: 'cloudy', icon: 'cloudy' }
];

describe('Forecast Component', function() {
	it('should show 3 forecast items', function() {
		var forecast = TEST_FORECAST;
		var item = TestUtils.renderIntoDocument(
			<ForecastWeather forecast={forecast} />	
		);
		
		var items = TestUtils.scryRenderedComponentsWithType(item, ForecastItem);
		expect(items.length).to.equal(TEST_FORECAST.length);
	});
	
	it('first forecast should be x degrees', function() {
		var forecast = TEST_FORECAST;
		var item = TestUtils.renderIntoDocument(
			<ForecastWeather forecast={forecast} />	
		);
		
		var items = TestUtils.scryRenderedComponentsWithType(item, ForecastItem);
		var temp = ReactDOM.findDOMNode(items[0].refs.temp);
		expect(temp.textContent).to.equal(TEST_FORECAST[0].tempF + '°');
	});
});