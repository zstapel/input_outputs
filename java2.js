let e = document.getElementById("wineglass_empty2");
let f = document.getElementById("bowl_empty");
let g = document.getElementById("vasebreak");
let b = document.getElementById("break");
var breakIsPlaying = false;

e.addEventListener("click", myFunction4)
function myFunction4(){
	document.getElementById("wineglass_full2").style.display = "block";
}

f.addEventListener("click", myFunction5)
function myFunction5(){
	document.getElementById("bowl_full").style.display = "block";
}

g.addEventListener("click", myFunction6)
function myFunction6(){
	document.getElementById("vasebreak").style.display = "none";
	breakIsPlaying = true;
	b.play();
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
	
