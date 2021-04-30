let e = document.getElementById("wineglass_empty2");
let f = document.getElementById("bowl_empty");
let g = document.getElementById("vasebreak");

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
}