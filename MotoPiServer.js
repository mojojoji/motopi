var express = require('express');
var app = express();
var port = process.env.PORT || 500;

var MotoPi = require('./MotoPi.js');

var client = function(req, res){
  	res.sendfile(__dirname + '/motopi_client.html');
};

var forward = function(req, res){
	MotoPi.moveForward();
};

var backward = function(req, res){
	MotoPi.moveBackward();
};

var left = function(req, res){
	MotoPi.turnLeft();
};

var right = function(req, res){
	MotoPi.turnRight();
};

var stop = function(req, res){
	MotoPi.stop();
};


exports.start = function()
{
	app.get('/forward/',forward);
	app.get('/backward/', backward);
	app.get('/left/', left);
	app.get('/right/', right);
	app.get('/stop/', stop);

	//Serve the UI
	app.get('/', client);

	console.log('Listening to port 5000');
	app.listen(port);
}


