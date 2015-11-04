"use strict";

var fetch = require('node-fetch');

module.exports = function(newsData, secondaryNewsApi, newsDataCallback) {
	var stories = [];
	var storyCount = 0;
	for (var i = 0; i < newsData.length; i++) {
		var apiUrl = secondaryNewsApi + newsData[i] + '.json';
		fetch(apiUrl)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				stories[storyCount] = { title: json.title, abstract: '' };
				storyCount++;
				if( storyCount >= newsData.length ) {
					newsDataCallback.call(null, stories);
				}
			})
			.catch(function(response) {
				console.log(response);
			});
	}
};