## NodeJS Raspberry Pi Two Way Mirror##

Inspired by Magic Mirror: [https://www.raspberrypi.org/blog/magic-mirror/](https://www.raspberrypi.org/blog/magic-mirror/)

**Technologies Used:**

Hardware:

 - Raspberry Pi 2
 - Pir Motion Sensor
 - Monitor
 - Two Way Mirror

Raspberry Pi Scripts:

 - NodeJS [https://nodejs.org/en/](https://nodejs.org/en/)
 - ONOFF for GPIO interfacing [https://www.npmjs.com/package/onoff](https://www.npmjs.com/package/onoff)

Front-end:

 - ReactJS
 - Gulp Task Runner
 - Browserify for module bundling [http://browserify.org/](http://browserify.org/)
 - Reactify for React JSX Transpiling [https://www.npmjs.com/package/reactify](https://www.npmjs.com/package/reactify)
 - ES Lint for Static Analysis [https://github.com/adametry/gulp-eslint](https://github.com/adametry/gulp-eslint)
 - LESS CSS Pre-processor [http://lesscss.org/](http://lesscss.org/)
 - Node Fetch a Fetch pollyfill [https://www.npmjs.com/package/node-fetch](https://www.npmjs.com/package/node-fetch)
 - Mocha Unit Testing [https://mochajs.org/](https://mochajs.org/)
 
 
 
 How it works
=======
First the NodeJS app.js script waits on a signal from the PIR sensor. When the PIR sensor detects motion the application turns the display on and simply opens a browser in fullscreen mode to your html page. Two minutes after the last motion detection, it simply kills the browser process and turns off the display.

Usage and Installation
=======
## Software ##

**Script Portion**

 1. Update the Raspberry Pi
	 1a. sudo apt-get update
	 1b. sudo apt-get upgrade
 2. Install Node.JS
	 2a. wget http://node-arm.herokuapp.com/node_latest_armhf.deb
	 2b. sudo dpkg -i node_latest_armhf.deb
	 2c. once finished, verify it works via the "node -v" command
 3. Copy over the app.js file from this source code onto a folder in your Raspberry Pi
 4. Test the script via the following command: "node app.js"
 5. This app will stay running until you end the command. You can stop here if you don't want this app to run on bootup
 6. Make it run on boot with the following command
	 6a.  su pi -c 'node /PATH/TO/app.js < /dev/null &'

**Web Page Front-End**
This is where you can get creative. I've provided a react, fast and animated front-end for you and to compile all the code into a neat package.

Roll your own:
Simply copy an html file to /home/pi/mirror/MirrorPage.html

Use the provided app awesome and delightful app:

 1. Install npm ( node package manager ) to download the dependencies of the application
 2. download the source code from this github page
 3. run "npm install" to install all of the dependencies
 4. Create a config file to house the URLs to your specific APIs for weather, news etc.
	 4a.  In the root folder create a folder named config
	 4b. Copy the file named config_example.json to the config folder and rename it to config.json
	 4c. Get a developer key for the applicable APIs and replace them in the config.json file you just copied
 5. run "gulp" to compile all of the code into the dist directory of the source code folder
 6. Now simply copy the html, js and css files/folders over to the /home/pi/mirror directory

## User Interface ##

The UI that displays behind the mirror is built using components in React. React is a new virtual dom front-end framework that gets the developer thinking in a more modular, single responsibility way.

The UI is designed to be high contrast such that the interface pops through the two way mirror. Using a two way mirror above a monitor allows all light, white UI components, to shine through giving a cool looking futuristic effect.

The UI is styled using the LESS framework. LESS is a css pre-processor that allows the developer to use variables, mixins, math etc within css. The side affect of this is the drastic reduction in CSS written. Secondly with the ability to import LESS files the developer can migrate the single responsibility principle to their css workflow.

