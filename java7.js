let a = document.getElementById("vase_empty");
let b = document.getElementById("platter_empty");



a.addEventListener("click", myFunction)
function myFunction(){
	document.getElementById("vase_full").style.display = "block";
}

b.addEventListener("click", myFunction1)
function myFunction1(){
	document.getElementById("platter_full").style.display = "block"
}

