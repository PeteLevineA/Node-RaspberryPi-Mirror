"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TransitionIn = require('./components/transitionIn.jsx');
var TypingText = require('./components/typingText.jsx');
var CurrentWeather = require('./components/currentWeather.jsx');
var ForecastWeather = require('./components/forecastWeather.jsx');
var News = require('./components/news.jsx');
var DateTimeText = require('./components/dateTimeText.jsx');
var NewsInfo = require('./lib/newsInfo.js');
var HackerNewsInfo = require('./lib/hackerNewsInfo.js');
var config = require('./config/config.json');

var App = React.createClass({
	render: function() {
		return <div>
				<TransitionIn initialClass="dateTime dateTimeTransitionOut" transitionClass="dateTime dateTimeTransitionIn">
					<DateTimeText />
				</TransitionIn>
				<div id="introText"> 
					<TypingText message="Hello World" />
				</div>				
				<TransitionIn initialClass="weather weatherTransitionOut" transitionClass="weather weatherTransitionIn">
					<div id="mainWeather">
						<CurrentWeather />
					</div>
					<ForecastWeather />
				</TransitionIn>
				<TransitionIn initialClass="newsHeadlines newsTransitionOut" transitionClass="newsHeadlines newsTransitionIn">
					<News newsParser={NewsInfo} newsApiUrl={config.urls.news} />
				</TransitionIn>
				<TransitionIn initialClass="hackerNews hackerNewsTransitionOut" transitionClass="hackerNews hackerNewsTransitionIn">
					<News newsItemCount={8} newsParser={HackerNewsInfo} newsApiUrl={config.urls.hackerNews} secondaryApiUrl={config.urls.secondaryHackerNewsApi} />
				</TransitionIn>
			</div>;
	}
});

ReactDOM.render(<App />, document.getElementById('app'));