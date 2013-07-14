var gpio = require("pi-gpio");

gpio.read(16, function(err, value) {
    if(err) throw err;
    console.log(value);    // The current state of the pin

});




