
var gpio = require("pi-gpio");

function readPin(pin,callback)
{
	gpio.open(pin, "input", function(err) {        
            gpio.read(pin, function(err, value) {
		    	console.log(value);
			});
        });
	
}

function setPin(pin,state,callback)
{
        gpio.open(pin, "output", function(err) {        
                gpio.write(pin, state, function() {            
                        gpio.close(pin);                        
                        if(callback)
                                callback();
                });
        });
}
setPin(12,1,function(){
	readPin(18);
});

