"use strict";

var fetch = require('node-fetch');

var DataLoader = function() {
	
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
			if( secondaryApiUrl != null && secondaryApiUrl != undefined )
			{
				dataParser.call(null, json, secondaryApiUrl, dataLoadedCallback);
			}
			else
			{
				self.data = dataParser.call(null, json, secondaryApiUrl);
				dataLoadedCallback.call(null, self.data);
			}			
		})
		.catch(function(response) {
			console.log(response);
		});
};

module.exports = DataLoader;