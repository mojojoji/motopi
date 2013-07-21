 module.exports = function(sensorPin){
	var _PIN = sensorPin;
	var SENSE_TIME = 100;

	var tempVCC = 12;

	var senseLoop;

	this.callback = null;

	var RaspPi = require('./RaspPi.js');

	var loop = function(){
		RaspPi.getPin(sensorPin,function(value){
			if(this.callback)
				this.callback(value);
		});
	}

	this.startSense = function(callback){
		RaspPi.setPin(tempVCC,1,function(){
			this.callback =callback;
		 	senseLoop = setInterval(loop,SENSE_TIME);
		});
	};
}