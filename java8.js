var d = document.getElementById("doorsound"); 
var a = document.getElementById("door");
var doorIsPlaying = false;
var p = document.getElementById("plantersound");
var b = document.getElementById("planter");
var planterIsPlaying = false;
var c = document.getElementById("chopping");
var e = document.getElementById("person");
var choppingIsPlaying = false;



a.addEventListener("click", myFunction1)
function myFunction1(){
	if (doorIsPlaying){
		doorIsPlaying = false;
		d.pause();
			} else {
				doorIsPlaying = true;
				d.play();
			}
		}



b.addEventListener("click", myFunction2)
function myFunction2(){
	if (planterIsPlaying){
		planterIsPlaying = false;
		p.pause();
			} else {
				planterIsPlaying = true;
				p.play();
			}
		}

e.addEventListener("click", myFunction3)
function myFunction3(){
	if (choppingIsPlaying){
		choppingIsPlaying = false;
		c.pause();
			} else {
				choppingIsPlaying = true;
				c.play();
			}
		}
	// playAudio();
	// doorIsPlaying = true;

// 	}
// }
// function playAudio() {
//   d.play(); 
// } 

// function pauseAudio() { 
//   d.pause(); 
// } 


// If ( x == 3) {      }

