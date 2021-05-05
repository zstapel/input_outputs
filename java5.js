let a = document.getElementById("plate_empty");
let b = document.getElementById("glass_empty3");
let c = document.getElementById("candle_unlit");
var m = document.getElementById("amore");
var s = document.getElementById("speaker2")
var amoreIsPlaying = false;
var plate = document.getElementById("plate_full");
var glass = document.getElementById("wineglass_full3");
var water = new Audio('sounds/water_pouring.mp3');
var light = document.getElementById("candle_lit");


a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("plate_full").style.display = "block";
}

plate.addEventListener("click", myFunction4)
function myFunction4(){
	document.getElementById("plate_full").style.display = "none";
}

b.addEventListener("click", myFunction1)
function myFunction1(){
	document.getElementById("wineglass_full3").style.display = "block"
	water.play();
}

glass.addEventListener("click", myFunction6)
function myFunction6(){
	document.getElementById("wineglass_full3").style.display = "none"
}

c.addEventListener("click", myFunction2)
function myFunction2(){
	document.getElementById("candle_lit").style.display = "block"
}

light.addEventListener("click", myFunction9)
function myFunction9(){
	document.getElementById("candle_lit").style.display = "none"
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


