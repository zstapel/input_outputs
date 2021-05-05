let a = document.getElementById("cup_empty");
let c = document.getElementById("chairSounds");
let s = document.getElementById("chair");
let chairSoundsIsPlaying = false;
var water = new Audio('sounds/water_pouring.mp3');
var cup = document.getElementById("cup_full");

a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("cup_full").style.display = "block";
	water.play();
}

cup.addEventListener("click", myFunction3)
function myFunction3(){
	document.getElementById("cup_full").style.display = "none";
}

s.addEventListener("click", myFunction1)
function myFunction1(){
	if (chairSoundsIsPlaying){
		chairSoundsIsPlaying = false;
		c.pause();
			} else {
				chairSoundsIsPlaying = true;
				c.play();
			}
		}

