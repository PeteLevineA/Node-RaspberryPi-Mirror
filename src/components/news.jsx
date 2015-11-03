"use strict";

var React = require('react');
var NewsHeadline = require('./newsHeadline.jsx');

var News = React.createClass({
	propTypes: {
		news: React.PropTypes.object,
		newsItemCount: React.PropTypes.number
	},
	getDefaultProps: function() {
		
	},
	getInitialState: function() {
		return {
			news: [
				{ title: 'loading', abstract: '' }
			]
		}
	},
	componentDidMount: function() {
		filterNews(this.props.news);
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