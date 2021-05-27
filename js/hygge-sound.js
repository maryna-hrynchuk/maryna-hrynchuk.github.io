$(document).ready(function () {
	
	var obj = document.createElement("audio");
	obj.src = "audio/hugge.mp3";
	obj.volume = 1;
	obj.autoPlay = false;
	obj.preLoad = true;
	obj.controls = true;

	$(".sound").click(function() {
		obj.play();
	});
	
	return false;
});

