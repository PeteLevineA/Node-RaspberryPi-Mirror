"use strict";

var fetch = require('node-fetch');

var DataLoader = function(data) {
	this.data = data;
}

DataLoader.prototype.data = {};

DataLoader.prototype.load = function(dataLoadedCallback, apiUrl, secondaryApiUrl, dataParser) {
	var self = this;
	// fetch is a window.fetch pollyfill with promises
	fetch(apiUrl)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			self.data = dataParser.call(null, json, secondaryApiUrl);
		})
		.catch(function(response) {
			console.log(response);
			self.data = {
				forecast: [
					{ tempF: "failed", weather: "", icon: "" }
				]
			};
		});
};

module.exports = DataLoader;