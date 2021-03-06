"use strict";

var News = require('../src/components/news.jsx');
var NewsHeadline = require('../src/components/newsHeadline.jsx');
var chai = require('chai');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = chai.expect;

chai.should();

var TEST_NEWS = [
	{ title: 'test', abstract: 'abstract' },
	{ title: 'test2', abstract: 'abstract' }	
];

describe('News Component', function() {
	it('should show 2 news items', function() {
		var news = TEST_NEWS;
		var item = TestUtils.renderIntoDocument(
			<News news={news} />	
		);
		var items = TestUtils.scryRenderedComponentsWithType(item, NewsHeadline);
		expect(items.length).to.equal(TEST_NEWS.length);
	});
	it('second news item should show news details', function() {
		var news = TEST_NEWS;
		var item = TestUtils.renderIntoDocument(
			<News news={news} />
		);
		
		var items = TestUtils.scryRenderedComponentsWithType(item, NewsHeadline);
		var title = ReactDOM.findDOMNode(items[0].refs.title);
		expect(title.textContent).to.equal(TEST_NEWS[0].title);
	});
});