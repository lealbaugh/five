var jfive = require("johnny-five"),
    board = new jfive.Board();

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  (new jfive.Led(13)).strobe();

});