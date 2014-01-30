// ----------------JOHNNY-5--------------------------
var jfive = require("johnny-five"),
	board = new jfive.Board(),
	led;


board.on("ready", function() {
  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  led = new jfive.Led({board: this, pin: 13});
  led.off();
  console.log("led ready!");
});

// ----------------SERVER----------------------------
var http = require('http')
  , express = require('express')
  , app = express()
  , port = process.env.PORT || 5000;
  // get port from environmental variable, as is the Heroku way

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(port, function() { console.log(this._connectionKey)});

console.log('http server listening on %d', port);

// Create a Socket.IO instance, passing it our server
var io = require('socket.io').listen(server);
io.set('log level', 1);

// Add a connect listener
io.sockets.on('connection', function(socket){ 
	console.log("socket established");

	socket.on('message',function(event){ 
		console.log('Message: ',event);
	});

	socket.on('click', function(event){
		switchLed();
	});
});

function switchLed() {
	if(typeof led === 'undefined'){
	   console.log("no led yet!");
	 }
	 else {
		led.toggle();
	 }
}

console.log("read the code!");
