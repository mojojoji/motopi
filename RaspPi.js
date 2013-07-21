var gpio = require("pi-gpio");

exports.setPin = function(pin,state,callback)
{
	gpio.open(pin, "output", function(err) {        // Open pin 16 for output
   		gpio.write(pin, state, function() {            // Set pin 16 high (1)
        		gpio.close(pin);                        // Close pin 16
			if(callback)
				callback();	
    		});
	});
}

exports.getPin = function(pin,callback)
{
    gpio.open(pin, "input", function(err) {        
            gpio.read(pin, function(err, value) {
                if(callback)
                    callback(value);
            });
        });
    
}


