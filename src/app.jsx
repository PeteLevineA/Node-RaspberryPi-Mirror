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
var WeatherInfo = require('./lib/weatherInfo.js');
var ForecastInfo = require('./lib/forecastInfo.js');
var config = require('./config/config.json');
var DataLoader = require('./lib/dataLoader.js');

var App = React.createClass({
	componentDidMount: function() {
		var news = new DataLoader(),
			hackerNews = new DataLoader(),
			forecast = new DataLoader(),
			weather = new DataLoader(),
			self = this;
		
		news.load(function(newsData) {
			self.setState({
				news: newsData
			});
		}, config.urls.news, null, NewsInfo);
		hackerNews.load(function(newsData) {
			self.setState({
				hackerNews: newsData
			});
		}, config.urls.hackerNews, config.urls.hackerNewsData, HackerNewsInfo);
		forecast.load(function(forecastData) {
			self.setState({
				forecast: forecastData
			});
		}, config.urls.forecast, null, ForecastInfo);
		weather.load(function(weatherData) {
			self.setState({
				weather: weatherData
			});
		}, config.urls.weather, null, WeatherInfo);
	},
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
						<CurrentWeather weather={this.state.weather} />
					</div>
					<ForecastWeather forecast={this.state.forecast} />
				</TransitionIn>
				<TransitionIn initialClass="newsHeadlines newsTransitionOut" transitionClass="newsHeadlines newsTransitionIn">
					<News news={this.state.news} />
				</TransitionIn>
				<TransitionIn initialClass="hackerNews hackerNewsTransitionOut" transitionClass="hackerNews hackerNewsTransitionIn">
					<News newsItemCount={8} news={this.state.hackerNews} />
				</TransitionIn>
			</div>;
	}
});

ReactDOM.render(<App />, document.getElementById('app'));