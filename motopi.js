
var Motor = require('./Motor.js')

var leftMotor = new Motor(16,15);
var rightMotor = new Motor(7,11);

//Sensor also add here

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