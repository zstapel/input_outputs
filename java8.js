var d = document.getElementById("doorsound"); 
var a = document.getElementById("door");
var doorIsPlaying = false;



a.addEventListener("click", myFunction)
function myFunction(){
	if (doorIsPlaying){
		doorIsPlaying = false;
		pauseAudio();
			} else {
				doorIsPlaying = true;
				d.play();
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