"use strict";

var fetch = require('node-fetch');

module.exports = function(newsData, secondaryNewsApi, newsDataCallback) {
	var stories = [];
	var storyCount = 0;
	for (var i = 0; i < newsData.length; i++) {
		fetch(secondaryNewsApi + newsData[i] + ".json")
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				stories[storyCount] = { title: json.title, abstract: '' };
				storyCount++;
				if( storyCount >= newsData.length ) {
					newsDataCallback.call(this, stories);
				}
			})
			.catch(function(response) {
				console.log(response);
			});
	}
};