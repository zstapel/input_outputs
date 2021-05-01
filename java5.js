let a = document.getElementById("plate_empty");
let b = document.getElementById("glass_empty3");
let c = document.getElementById("candle_unlit");
var m = document.getElementById("amore");
var s = document.getElementById("speaker2")
var amoreIsPlaying = false;


a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("plate_full").style.display = "block";
}

b.addEventListener("click", myFunction1)
function myFunction1(){
	document.getElementById("wineglass_full3").style.display = "block"
}

c.addEventListener("click", myFunction2)
function myFunction2(){
	document.getElementById("candle_lit").style.display = "block"
}

s.addEventListener("click", myFunction3)
function myFunction3(){
	if (amoreIsPlaying){
		amoreIsPlaying = false;
		m.pause();
			} else {
				amoreIsPlaying = true;
				m.play();
			}
		}


