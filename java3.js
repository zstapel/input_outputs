let a = document.getElementById("mousehole_empty");
let j = document.getElementById("jukebox");
var b = document.getElementById("bornInTheUSA");
var m = document.getElementById("mousehole_mouse");
var songIsPlaying = false;
var mouse = new Audio('sounds/mouse_squeaking.mp3');


a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("mousehole_mouse").style.display = "block";
	mouse.play();
}

m.addEventListener("click", hole)
function hole(){
	document.getElementById("mousehole_mouse").style.display = "none";
}

j.addEventListener("click", myFunction1)
function myFunction1(){
	if (songIsPlaying){
		songIsPlaying = false;
		b.pause();
			} else {
				songIsPlaying = true;
				b.play();
			}
		}


