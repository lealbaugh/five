var backgroundcolor = "#D2E4FC";

function init() {

	canvas = document.createElement('canvas');
	document.querySelector('body').appendChild(canvas);
	ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 300;

	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	ctx.fillStyle= backgroundcolor;
	ctx.fillRect(0,0,canvas.width, canvas.height);

	window.addEventListener('mousemove', mouseMoved, false);
	ws = io.connect();
	// ws.on('score', function(score){
	// 	document.getElementById('score').innerHTML = score;
	// 	console.log("posted score: "+score);
	// });

}

function  mouseMoved(e) {     //e is the event handed to us
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    var quantity = mapTo255(mouseY);
    console.log(quantity);
    ws.emit("moved", quantity);
}

function mapTo255(n) {
	return 255*n/ctx.canvas.width;
}


init();



