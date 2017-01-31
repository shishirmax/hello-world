function digiClock(){
		var today = new Date()
		var time = today.toLocaleTimeString()

		document.getElementById("clock").innerHTML = time
	}
	setInterval(function(){
		digiClock()
	},1000)