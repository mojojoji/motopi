/*
 * Motor.js : Represent any motor. Used to control the motor CW,CCW rotations and Stop
 * Construtor(CWPIN,CCWPIN) : GPIO pins used to rotate motor CW,CCW
 *
 * CW,CCW are as seen when viewed from side of robot (direction of rotation of wheel).
 *
 *	rotateCW() : rotates Motor clockwise
 *	rotateCCW() : rotates Motor anticlockwise
 * 	stopRotate() : stops all existing motion for the motor
 */
 module.exports = function(CWPIN,CCWPIN){
	var _CWPIN = CWPIN;
	var _CCWPIN = CCWPIN;

	var RaspPi = require('./RaspPi.js');

	this.rotateCW = function()
	{
		this.stopRotate(function(){
			RaspPi.setPin(_CWPIN,1);
		});
	}

	this.rotateCCW = function()
	{
		this.stopRotate(function(){
			RaspPi.setPin(_CCWPIN,1);
		});
	}

	this.stopRotate = function(callback)
	{
		RaspPi.setPin(_CWPIN,0,function(){
			RaspPi.setPin(_CCWPIN,0,function(){
				if(callback)
					callback();		
			});
		
		});
	}
}