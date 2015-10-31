var Gpio = require('onoff').Gpio;
var exec = require('child_process').exec;
var PIR_PIN = 18;
var motionSensor = new Gpio(PIR_PIN, 'in', 'both');
var dateLastSensed;
var timeoutDisplay;
var TIME_TO_TURN_SCREEN_OFF = 120;

motionSensor.watch(function (err, value) {
    if (err) {
        exit();
    }
    console.log('Detected at ' + (new Date()).toDateString());

    if (shouldDisplayTurnOn()) {
        turnDisplayOn();
        if (timeoutDisplay) {
            window.clearTimeout(timeoutDisplay);
        }
        timeoutDisplay = setTimeout(turnOffDisplayAndCloseBrowser, TIME_TO_TURN_SCREEN_OFF * 1000);
    }
    else {
        if (timeoutDisplay) {
            window.clearTimeout(timeoutDisplay);
        }
        timeoutDisplay = setTimeout(turnOffDisplayAndCloseBrowser, TIME_TO_TURN_SCREEN_OFF * 1000);
    }
});

function shouldDisplayTurnOn() {
    var date = new Date();
    var turnDisplayOn = false;
    if (dateLastSensed === null || dateLastSensed === undefined) {
        dateLastSensed = date;
        turnDisplayOn = true;
    }
    if (dateLastSensed - date > TIME_TO_TURN_SCREEN_OFF * 1000) {
        turnDisplayOn = true;
    }
    dateLastSensed = date;
    return turnDisplayOn;
}

function turnDisplayOn() {
    exec('/opt/vc/bin/tvservice -p', puts);
    // Wait 2 seconds to open browser
    setTimeout(function () {
        exec('chromium --kiosk --noerrdialogs --incognito /home/pi/mirror/MirrorPage.html', puts);
        // Wait more to play audio
        setTimeout(function () {
            exec('omxplayer /home/pi/mirror/HelloIAmBaymax.mp3', puts);
        }, 2500);
    }, 2000);
}


function turnOffDisplayAndCloseBrowser() {
    exec('pkill chromium', puts);
    exec('/opt/vc/bin/tvservice -o', puts);
}
function puts(error, stdout, stderr) {
    if (error) {
        console.log(error);
    }
    console.log(stdout);
}

function exit() {
    motionSensor.unexport();
    process.exit();
}

process.on('SIGINT', exit);