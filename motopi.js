var express = require('express');
var gpio = require("pi-gpio");

var CWPIN = [7,16];
var CCWPIN = [11,15];

var isLeftObstacle = false;

var app = express();

var loop = setInterval(loop,100);

function loop()
{
    console.log('sensing...');
    console.log('Left sensor found obstacle :'+isLeftObstacle );
}

app.get('/forward/', function(req, res){
    if(!isLeftObstacle)
    {
       forward();
    }
    else
    {

    }    
    res.end('DONE');
});

app.get('/backward/', function(req, res){
    if(!isLeftObstacle)
    {
       backward();
    }
    else
    {

    }    
    res.end('DONE');
});

app.get('/left/', function(req, res){
     if(!isLeftObstacle)
    {
       left();
    }
    else
    {

    }    
    res.end('DONE');
});

app.get('/right/', function(req, res){
    if(!isLeftObstacle)
    {
       right();
    }
    else
    {

    }    
    res.end('DONE');
});

app.get('/stop/', function(req, res){
    stop();
    res.end('DONE');
});

//Serve the UI
app.get('/', function(req, res){
  res.sendfile(__dirname + '/motopi_client.html');
});

function forward()
{
    CW(0);
    CCW(1);
}
function backward()
{
    CW(1);
    CCW(0);
}
function left()
{
    CW(0);
    CW(1);
}
function right()
{
    CCW(1);
    CCW(0);
}
function stop()
{
    stop(0);
    stop(1);
}

var port = process.env.PORT || 5000;
app.listen(port);


function CW(motor)
{
	stop(motor, function(){setPin(CWPIN[motor],1);});
}

function CCW(motor)
{
	stop(motor, function(){setPin(CCWPIN[motor],1);});
}

function stop(motor, callback)
{
	setPin(CWPIN[motor],0,function(){
		setPin(CCWPIN[motor],0,function(){
			if(callback)
				callback();		
		});
	
	});
}

function setPin(pin,state,callback)
{
	gpio.open(pin, "output", function(err) {        // Open pin 16 for output
   		gpio.write(pin, state, function() {            // Set pin 16 high (1)
        		gpio.close(pin);                        // Close pin 16
			if(callback)
				callback();	
    		});
	});
}

