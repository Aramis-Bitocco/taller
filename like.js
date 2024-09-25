let a = 0;

function gustar() {
	a = a + 1;
	document.getElementById('like1').innerHTML = a;
}

let b = 0;

function gustar2() {
	b = b + 1;
	document.getElementById('like2').innerHTML = b;
}

let c = 0;

function gustar3() {
	c = c + 1;
	document.getElementById('like3').innerHTML = c;
}


function seguir() {
	
	document.getElementById('follow').innerHTML= "Siguiendo"
	document.getElementById('follow').style.background= "red"
 
}

function seguir2() {
	document.getElementById('follow2').innerHTML= "Siguiendo"
	document.getElementById('follow2').style.background= "red"
 
}

function seguir3() {
	document.getElementById('follow3').innerHTML= "Siguiendo"
	document.getElementById('follow3').style.background= "red"
 
}

function comentar() {
	document.getElementById('comentario').style.display= "flex";
	document.getElementById('btnsend').style.display= "flex";
}

function comentar2() {
	document.getElementById('comentario2').style.display= "flex";
	document.getElementById('btnsend2').style.display= "flex";
}

function comentar3() {
	document.getElementById('comentario3').style.display= "flex";
	document.getElementById('btnsend3').style.display= "flex";
}
function enviar() {
	let coment = document.getElementById('comentario').value
	let hijo = document.createElement("p");
	hijo.innerHTML = coment;
	let padre = document.getElementById('persona');
	padre.appendChild(hijo);
}