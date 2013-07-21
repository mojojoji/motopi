var express = require('express');
var app = express();
var port = process.env.PORT || 500;

var MotoPi = require('./MotoPi.js');

var client = function(req, res){
  	res.sendfile(__dirname + '/motopi_client.html');
};

var forward = function(req, res){
	MotoPi.moveForward();
	res.end('DONE');
};

var backward = function(req, res){
	MotoPi.moveBackward();
	res.end('DONE');
};

var left = function(req, res){
	MotoPi.turnLeft();
	res.end('DONE');
};

var right = function(req, res){
	MotoPi.turnRight();
	res.end('DONE');
};

var stop = function(req, res){
	MotoPi.stop();
	res.end('DONE');
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


