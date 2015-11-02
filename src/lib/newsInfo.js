"use strict";

module.exports = function(newsData) {
	var newsInfo = newsData.results.map(function(obj) {
		var news = {
			title: obj.title,
			abstract: obj.abstract
		};
		return news;
	});
	return newsInfo;
};