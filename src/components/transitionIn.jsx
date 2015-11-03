"use strict";

var React = require('react');

var TransitionIn = React.createClass({
	propTypes: {
		duration: React.PropTypes.number,
		initialClass: React.PropTypes.string,
		transitionClass: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			duration: 500,
			initialClass: '',
			transitionClass: ''
		};
	},
	getInitialState: function() {
		return {
			currentClass: this.props.initialClass
		};
	},
	timerTick: function() {
		this.setState({
			currentClass: this.props.transitionClass
		});
	},
	componentDidMount: function() {
		setTimeout(this.timerTick, this.props.duration);
	},
	render: function() {
		var classAttrib = this.state.currentClass;
		return <div ref="transitionElement" className={classAttrib}>
				{ this.props.children }
			</div>;
	}
});

module.exports = TransitionIn;