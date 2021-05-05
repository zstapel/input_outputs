let a = document.getElementById("vase_empty");
let b = document.getElementById("platter_empty");
let c = document.getElementById("chairSounds");
let s = document.getElementById("stool");
let chairSoundsIsPlaying = false;
var v = document.getElementById("vase_full");
var platter = document.getElementById("platter_full");


a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("vase_full").style.display = "block";
}

v.addEventListener("click", myFunction7)
function myFunction7(){
	document.getElementById("vase_full").style.display = "none";
}

b.addEventListener("click", myFunction1)
function myFunction1(){
	document.getElementById("platter_full").style.display = "block"
}

platter.addEventListener("click", myFunction6)
function myFunction6(){
	document.getElementById("platter_full").style.display = "none"
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

