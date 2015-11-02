"use strict";

module.exports = function(date) {
	var currentDateTime = new Date(),
		curSplit = currentDateTime.toString().split(' '),
		day = curSplit[0],
		month = curSplit[1],
		dayNum = curSplit[2],
		year = curSplit[3],
		time = curSplit[4],
		timeSplit = time.split(':');
	time = timeSplit[0] + ':' + timeSplit[1];
	return day + ' ' + month + ' ' + dayNum + ', ' + year + ' ' + time;
}