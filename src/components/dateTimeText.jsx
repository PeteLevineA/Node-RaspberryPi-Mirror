"use strict";

var React = require('react');
var DateString = require('../lib/dateString.js');

var DateTimeText = React.createClass({
	propTypes: {
		timerInterval: React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			timerInterval: 30000
		};
	},
	getInitialState: function() {
		return {
			dateText: DateString(Date.now)
		};
	},
	componentDidMount: function() {
		this.timer = setInterval(this.timerTick, this.props.timerInterval);
	},
	componentWillUnmount: function() {
		if(this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	},
	timerTick: function() {
		this.setState({
			dateText: DateString(Date.now)
		});
	},
	render: function() {
		var dateText = this.state.dateText;
		return <span>{dateText}</span>;
	}	
});

module.exports = DateTimeText;