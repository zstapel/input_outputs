let a = document.getElementById("fish_regular");
var c = document.getElementById("change");
var	m = document.getElementById("money");
var changeIsPlaying = false;
var s = document.getElementById("speaker1");
var o = document.getElementById("como");
var comoIsPlaying = false;

a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("fish_bubbles").style.display = "block";
}

m.addEventListener("click", myFunction1)
function myFunction1(){
	if (changeIsPlaying){
		changeIsPlaying = false;
		c.pause();
			} else {
				changeIsPlaying = true;
				c.play();
			}
		}

s.addEventListener("click", myFunction2)
function myFunction2(){
	if (comoIsPlaying){
		comoIsPlaying = false;
		o.pause();
			} else {
				comoIsPlaying = true;
				o.play();
			}
		}

