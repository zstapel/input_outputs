let a = document.getElementById("cup_empty");
let c = document.getElementById("chairSounds");
let s = document.getElementById("chair");
let chairSoundsIsPlaying = false;

a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("cup_full").style.display = "block";
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

