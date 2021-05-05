let e = document.getElementById("wineglass_empty2");
let f = document.getElementById("bowl_empty");
let g = document.getElementById("vasebreak");
let b = document.getElementById("break");
var audio = new Audio('sounds/braking_vase.mp3');
var breakIsPlaying = false;
var water = new Audio('sounds/water_pouring.mp3');
let wine = document.getElementById("wineglass_full2");
let food = document.getElementById("bowl_full");

e.addEventListener("click", myFunction4)
function myFunction4(){
	document.getElementById("wineglass_full2").style.display = "block";
	water.play();
}

f.addEventListener("click", myFunction5)
function myFunction5(){
	document.getElementById("bowl_full").style.display = "block";
}

food.addEventListener("click", bowl)
function bowl(){
	document.getElementById("bowl_full").style.display = "none";
}

g.addEventListener("click", myFunction6)
function myFunction6(){
	document.getElementById("vasebreak").style.display = "none";
	audio.play();
	// breakIsPlaying = true;
	// b.play();
}

wine.addEventListener("click", full)
function full(){
	document.getElementById("wineglass_full2").style.display = "none";
}

// g.addEventListener("click", myFunction1)
// function myFunction1(){
// 	if (breakIsPlaying){
// 		breakIsPlaying = false;
// 		b.pause();
// 			} else {
// 				breakIsPlaying = true;
// 				b.play();
// 			}
// 		}
// g.addEventListener("click", myFunction6)
// function myFunction6(){
// 	if (breakIsPlaying){
// 		breakIsPlaying = false;
// 		b.pause();
// 			} else {
// 				breakIsPlaying = true;
// 				b.play();
// 			}
// 		}
	
