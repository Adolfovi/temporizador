var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;
var locked = false;
var iniciado;


// FUNCION QUE SE EJECUTA CUANDO SE ABRE LA PAGINA HTML
function start(){
document.getElementById('d').innerHTML = '0' + days;
document.getElementById('h').innerHTML = '0' + hours;
document.getElementById('m').innerHTML = '0' + minutes;
document.getElementById('s').innerHTML = '0' + seconds;
}




function tt(){
	console.log("tu puta madre");
	
}



// FUNCION QUE INDICA EL FUNCIONAMIENTO DEL TEMPORIZADOR
function incr(){

seconds = seconds + 1;
document.getElementById('s').innerHTML = seconds;


if(seconds >=60){
	document.getElementById('s').innerHTML = '0';
	seconds = 0;
	minutes = minutes + 1;
	document.getElementById('m').innerHTML = minutes;

}

if(minutes >=60){
	document.getElementById('m').innerHTML = '0';
	minutes = 0;
	hours = hours + 1;
	document.getElementById('h').innerHTML = hours;

}

if(hours >=24){
	document.getElementById('h').innerHTML = '0';
	hours = 0;
	days = days + 1;
	document.getElementById('d').innerHTML = days;

}

// CORRECTORES VISUALES
// SI ALGUN NUMERO ES INFERIOR A DIEZ, SE IMPRIMIRÁ CON UN 0 DELANTE
if(seconds <10){
document.getElementById('s').innerHTML = '0' +  seconds;
}

if(minutes <10){
document.getElementById('m').innerHTML = '0' +  minutes;
}

if(hours <10){
document.getElementById('h').innerHTML = '0' +  hours;
}

if(days <10){
document.getElementById('d').innerHTML = '0' +  days;
}


}

//  FUNCIONAR PARA PONER EN MARCHA EL TEMPORIZADOR
function iniciar(){

if(locked == false){
	iniciado = setInterval(incr, 1000);
	locked = true;
	}else{
		console.log("YA SE HA PRESIONADO EL BOTON");
	}


}


function detener(){
	clearInterval(iniciado);
	locked = false;
}

	
function reiniciar(){
	location.reload();
}

