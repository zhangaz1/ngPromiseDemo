onmessage = function(event) {
	var msg = 1000000;
	for(var i = 0; i < msg; i++) {
		if(!!console && i % 500 == 0) {
			console.info(i);
		}
	}
	var d = new Date();
	postMessage(d);
	event.data.document.title = d;
}
