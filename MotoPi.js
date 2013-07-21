
var Motor = require('./Motor.js');
var Sensor = require('./Sensor.js');

var leftMotor = new Motor(16,15);
var rightMotor = new Motor(7,11);

var leftSensor = new Sensor(18);

var permitted = {
	forward : true,
	backward : true,
	left : true,
	right : true
}

var Direction = { 
	FORWARD : 0,
	BACKWARD : 1,
	LEFT : 2,
	RIGHT : 3,
	STOP : 4
};

this.moving = Direction.STOP;

exports.turnRight = function(){
	if(permitted.right){
		leftMotor.rotateCCW();
		rightMotor.rotateCCW();
		this.moving = Direction.RIGHT;
	}
}

exports.turnLeft = function(){
	if(permitted.left){
		leftMotor.rotateCW();
		rightMotor.rotateCW();
		this.moving = Direction.LEFT;
	}
}

exports.moveForward = function(){
	if(permitted.forward){
		leftMotor.rotateCCW();
		rightMotor.rotateCW();
		this.moving = Direction.FORWARD;
	}
}

exports.moveBackward = function(){
	if(permitted.backward){
		leftMotor.rotateCW();
		rightMotor.rotateCCW();
		this.moving = Direction.BACKWARD;
	}
}

exports.stop = function(){
	leftMotor.stopRotate();
	rightMotor.stopRotate();
	this.moving = Direction.STOP;
}


leftSensor.startSense(function(value){
	console.log(value);
	if(value === 1){
		permitted.forward = false;
	}
	else{
		permitted.forward = true;
	}

	if(this.moving === Direction.FORWARD){
		exports.stop();
	}

});