// indian
let a = document.getElementById("mirror_clear");
let b = document.getElementById("wineglass_empty1");
let c = document.getElementById("light_on");
let g = document.getElementById("mirror_ghost");
let off = document.getElementById("light_off");
let wine = document.getElementById("wineglass_full1");
var water = new Audio('sounds/water_pouring.mp3');


	
a.addEventListener("click", myFunction)
function myFunction(){
	console.log("click");
	let g = document.getElementById("mirror_ghost");
	g.style.display = "block";	
}

g.addEventListener("click", myFunction4)
function myFunction4(){
	console.log("click");
	let g = document.getElementById("mirror_ghost");
	g.style.display = "none";
}

b.addEventListener("click", myFunction2)
function myFunction2(){
	document.getElementById("wineglass_full1").style.display = "block";
	water.play();
}

wine.addEventListener("click", full)
function full(){
	document.getElementById("wineglass_full1").style.display = "none";
}

c.addEventListener("click", myFunction3)
function myFunction3(){
	document.getElementById("light_off").style.display = "block";
	document.getElementById('light_on').style.display = "none";

}


off.addEventListener("click", light)
function light(){
	document.getElementById("light_off").style.display = "none";
	document.getElementById('light_on').style.display = "block";

}
	

// document.getElementById('#mirror_clear').addEventListener("click", clear);
// function clear(){
// 	document.getElentById('#mirror_clear').innerHtML = '#mirror_ghost'
// }
// const clear = document.querySelector('#mirror_clear')

// addEventListener("click", function({}))



// Medatranian
// const 


// Chinese
