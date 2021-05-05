// indian
let a = document.getElementById("mirror_clear");
let b = document.getElementById("wineglass_empty1");
let c = document.getElementById("light_on");
let g = document.getElementById("mirror_ghost")


	
a.addEventListener("click", myFunction)
function myFunction(){
	console.log("click");
	document.getElementById("mirror_ghost").style.display = "block";
// let g = getElementById("mirror_ghost");
// document.getElementById('#mirror_clear').addEventListener("click", clear);
// function clear(){
// 	document.getElentById('#mirror_clear').innerHtML = '#mirror_ghost'
// }
// const clear = document.querySelector('#mirror_clear')
// 	// if (g.style.display === "none") {
// 	// 	g.style.display = "block";
// 	// } else {
// 	// 	g.style.display = "none"
// 	}	
}

b.addEventListener("click", myFunction2)
function myFunction2(){
	document.getElementById("wineglass_full1").style.display = "block";
}

c.addEventListener("click", myFunction3)
function myFunction3(){
const clear = document.getElementById("light_on")
if (c.style.display === "none") {
	c.style.display = "block";
} else {
	c.style.display = "none";
}

	document.getElementById("light_off").style.display = "block";
	document.getElementById('light_on').style.display = "none";

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
