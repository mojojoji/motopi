
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

var moving = Direction.STOP;

exports.turnRight = function(){
	if(permitted.right){
		leftMotor.rotateCCW();
		rightMotor.rotateCCW();
		moving = Direction.RIGHT;
	}
}

exports.turnLeft = function(){
	if(permitted.left){
		leftMotor.rotateCW();
		rightMotor.rotateCW();
		moving = Direction.LEFT;
	}
}

exports.moveForward = function(){
	if(permitted.forward){
		leftMotor.rotateCCW();
		rightMotor.rotateCW();
		moving = Direction.FORWARD;
	}
}

exports.moveBackward = function(){
	if(permitted.backward){
		leftMotor.rotateCW();
		rightMotor.rotateCCW();
		moving = Direction.BACKWARD;
	}
}

exports.stop = function(){
	leftMotor.stopRotate();
	rightMotor.stopRotate();
	moving = Direction.STOP;
}


leftSensor.startSense(function(value){
	
	if(value === 1){
		permitted.forward = false;
		console.log(moving);
	}
	else{
		permitted.forward = true;
	}

	if(moving === Direction.FORWARD){
		exports.stop();
	}

});