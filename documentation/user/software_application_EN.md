## <a name="application">Application</a>

### Prerequisites

MEAN is an acronym for MongoDB, Express, AngularJs and NodeJs. The Blender use this architecture.

_Download and install Node.js_  
[Node.js](http://nodejs.org/download/)

_Download and install MongoDB. Make sure it's running on the default port (27017)._  
[MongoDB](http://www.mongodb.org/downloads)

_Node.js package manager, should already be installed as part of Node.js._  
[NPM](https://www.npmjs.org/)

### Installation

	npm install the-blender

### Settings

The application needs to be configured according to your own environment. We tried to reduce to a minimum, so this step is simple.

Below the generic configuration file of the application. We recommend not to change, but to make a copy and edit it.


	// Copy the sample file to custom file
	cp config.sample.js config.js

	/**
	* config.js
	*/
	module.exports = {
		database: {
			url: 'mongodb://localhost:25486/the-blender'
		},
		master: {
			url: 'http://localhost:8080/'
		},
		server: {
			port: 5555
		},
		board: {
			port: '/dev/ttyACM0',
			debug: true,
			cart: {
				A: {
					pwm: 3,
					brake: 9,
					dir: 12
				},
				B: {
					pwm: 11,
					brake: 8,
					dir: 13
				}
			}
		}
	};

### Use

