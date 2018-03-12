//Obtenemos el elemento con el que vamos a trabajar
var elementoTouch= document.getElementById("btnMenu");

//posteriormente asignamos el manejador de eventos lo cual
// se hace de manera convencional.
elementoTouch.addEventListener('touchend', function(event){
//Comprobamos si hay varios eventos del mismo tipo
if (event.targetTouches.length == 1) { 
	var touch = event.targetTouches[0]; 
	// con esto solo se procesa UN evento touch
	mostrarMenu();
	}

}, false);


function mostrarMenu(){
	$("#menu").toggleClass("mostrarMenu");
	if ($("#menu")[0].className == ''){
		$("#btnMenu")[0].text = "+ MENU";
		//$("#menu").slideToggle(200, function() {});
	}else{
		$("#btnMenu")[0].text = "- MENU";
		//$("#menu").slideToggle(200, function() {});
	}
	return;
}
