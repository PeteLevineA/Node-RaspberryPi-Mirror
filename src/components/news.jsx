"use strict";

var React = require('react');
var NewsHeadline = require('./newsHeadline.jsx');
var fetch = require('node-fetch');

var News = React.createClass({
	propTypes: {
		newsParser: React.PropTypes.func,
		newsItemCount: React.PropTypes.number,
		newsApiUrl: React.PropTypes.string,
		secondaryApiUrl: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			newsItemCount: 5
		}
	},
	getInitialState: function() {
		return {
			news: [
				{ title: 'loading', abstract: '' }
			]
		}
	},
	componentDidMount: function() {
		var self = this;
		fetch(this.props.newsApiUrl)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				self.loadNews(json);
			})
			.catch(function(response) {
				console.log(response);
				self.setState({
					news: [
						{ title: 'failed', abstract: '' }
					]
				});
			});
	},
	loadNews: function(newsData) {
		var newsUnfiltered = this.props.newsParser.call(this, newsData, this.props.secondaryApiUrl, this.filterNews);
		if( this.props.secondaryApiUrl == null || this.props.secondaryApiUrl == undefined ) {
			this.filterNews(newsUnfiltered);
		}
	},
	filterNews: function(newsUnfiltered) {
		var self = this;
		var newsFiltered = newsUnfiltered.filter(function(newsObj, i) {
			if( i >= self.props.newsItemCount ) {
				return false;
			}
			return true;
		});
		this.setState({
			news: newsFiltered
		});
	},
	render: function() {
		return <div className="">
			{this.state.news.map(function(obj,i) {
				var key = obj.title.replace(/\s+/g, '') + i;
				return <NewsHeadline key={key} title={obj.title} abstract={obj.abstract} />
			})}
			</div>;
	}
});

module.exports = News;