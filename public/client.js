function init() {
	
	// var textarea = document.createElement('textarea');
	// textarea.setAttribute("id", "textarea");
	// textarea.setAttribute("autofocus", "true");
	// textarea.setAttribute("spellcheck", "false");
	// // textarea.setAttribute("placeholder", "Type..");
	// document.querySelector('body').appendChild(textarea);

	window.addEventListener("keypress", function(e){ 
		// if the key is return, space, or tab
		if(e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 9){
			ws.emit("click", "click");
			console.log("click!");
		}
	});

	ws = io.connect()
	// ws.on('score', function(score){
	// 	document.getElementById('score').innerHTML = score;
	// 	console.log("posted score: "+score);
	// });

}


init();
