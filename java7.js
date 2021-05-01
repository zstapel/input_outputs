let a = document.getElementById("vase_empty");
let b = document.getElementById("platter_empty");
let c = document.getElementById("chairSounds");
let s = document.getElementById("stool");
let chairSoundsIsPlaying = false;


a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("vase_full").style.display = "block";
}

b.addEventListener("click", myFunction1)
function myFunction1(){
	document.getElementById("platter_full").style.display = "block"
}

s.addEventListener("click", myFunction2)
function myFunction2(){
	if (chairSoundsIsPlaying){
		chairSoundsIsPlaying = false;
		c.pause();
			} else {
				chairSoundsIsPlaying = true;
				c.play();
			}
		}

