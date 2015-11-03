"use strict";

var React = require('react');

var TypingText = React.createClass({
	propTypes: {
		message: React.PropTypes.string,
		timerInterval: React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			message: 'hello',
			timerInterval: 115
		};
	},
	getInitialState: function() {
		return {
			message: ''
		};
	},
	componentDidMount: function() {
		this.messageCharIndex = 0;
		this.timer = setInterval(this.timerTick, this.props.timerInterval);
	},
	componentWillUnmount: function() {
		if(this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	},
	timerTick: function() {
		var text = this.props.message.substring(0, this.messageCharIndex);
		this.setState({
			message: text
		});
		if(this.messageCharIndex > this.props.message.length) {
			clearInterval(this.timer);
		}
		this.messageCharIndex++;		
	},
	render: function() {
		return <div className="TypingText">
				<span className="introText" ref="text">{this.state.message}</span>
				<span className="cursorText">_</span>
			</div>;
	}
});

module.exports = TypingText;