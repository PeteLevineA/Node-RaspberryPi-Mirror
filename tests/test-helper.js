var jsdom = require("jsdom").jsdom;

global.window = jsdom('<html><body></body></html>').defaultView;
global.document = window.document;
global.navigator = window.navigator;