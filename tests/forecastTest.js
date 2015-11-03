"use strict";

var ForecastWeather = require('../src/components/forecastWeather.jsx');
var ForecastItem = require('../src/components/forecastItem');
var chai = require('chai');
var React = require('react');
var expect = chai.expect;

chai.should();

var TEST_FORECAST = [
	{ tempF: 70, text: 'sunny', icon: 'sunny' }
	{ tempF: 60, text: 'rainy', icon: 'rainy' }
	{ tempF: 70, text: 'cloudy', icon: 'cloudy' }
];

describe('Forecast Component', function() {
	it('should show 3 forecast items', function() {
		var forecast = TEST_FORECAST;
		var item = React.addons.TestUtils.renderIntoDocument(
			<ForecastWeather forecast={forecast} />	
		);
		
		var items = React.scryRenderedComponentsWithType(item, ForecastItem);
		expect(items.length).to.equal(TEST_FORECAST.length);
	});
	
	it('first forecast should be x degrees', function() {
		var forecast = TEST_FORECAST;
		var item = React.addons.TestUtils.renderIntoDocument(
			<ForecastWeather forecast={forecast} />	
		);
		
		var items = React.scryRenderedComponentsWithType(item, ForecastItem);
		var temp = React.findDOMNode(items[0].refs.temp);
		expect(temp.textContent).to.equal(TEST_FORECAST[0].tempF + '°');
	});
});