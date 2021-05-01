let a = document.getElementById("mousehole_empty");
let j = document.getElementById("jukebox");
var b = document.getElementById("bornInTheUSA")
var songIsPlaying = false;


a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("mousehole_mouse").style.display = "block";
}

j.addEventListener("click", myFunction1)
function myFunction1(){
	if (songIsPlaying){
		songIsPlaying = false;
		b.pause();
			} else {
				songIsPlaying = true;
				b.play();
			}
		}


