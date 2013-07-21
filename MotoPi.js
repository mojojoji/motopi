
var Motor = require('./Motor.js');
var Sensor = require('./Sensor.js');

var leftMotor = new Motor(16,15);
var rightMotor = new Motor(7,11);

var leftSensor = new Sensor(18);

leftSensor.startSense(function(value){
	console.log(value);
});

exports.turnRight = function(){
	leftMotor.rotateCCW();
	rightMotor.rotateCCW()
}

exports.turnLeft = function(){
	leftMotor.rotateCW();
	rightMotor.rotateCW()
}

exports.moveForward = function(){
	leftMotor.rotateCCW();
	rightMotor.rotateCW()
}

exports.moveBackward = function(){
	leftMotor.rotateCW();
	rightMotor.rotateCCW()
}

exports.stop = function(){
	leftMotor.stopRotate();
	rightMotor.stopRotate()
}