"use strict";

var React = require('react');
var NewsHeadline = require('./newsHeadline.jsx');

var News = React.createClass({
	propTypes: {
		news: React.PropTypes.array
	},
	componentDidMount: function() {
	},
	render: function() {
		return <div className="">
			{this.props.news.map(function(obj,i) {
				var key = obj.title.replace(/\s+/g, '') + i;
				return <NewsHeadline key={key} title={obj.title} abstract={obj.abstract} />
			})}
			</div>;
	}
});

module.exports = News;