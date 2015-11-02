"use strict";

var React = require('react');

var NewsHeadline = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		abstract: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			title: 'loading'
		}
	},
	render: function() {
		return <div className="newsHeadline">
				<div className="headlineTitle">
					{this.props.title}
				</div>
				<div className="headlineDescription">
					{this.props.abstract}
				</div>
			</div>;
	}
});

module.exports = NewsHeadline;