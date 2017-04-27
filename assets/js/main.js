//funcion que agrega texto desde el input a una lista, siendo visible esta en el html
function nombreFuncion(){
	var varInput = document.getElementById("ingreso"); 
	var contListas = document.getElementsByClassName("listas"); 
	var cambioText = document.getElementsByClassName("cambio");	


	if(varInput.value == undefined || varInput.value == ""){
		alert("Ingresa un elemento a la lista");
	}else{
		cambioText[0].innerHTML += "<option class='laMediaSeleccion'>" + document.getElementById("ingreso").value + "</option>";
		
		var nuevo = new Persona(
		contListas[0].innerHTML += "<li class='laMediaLista'>"+ varInput.value + "</li>" + "<br>";
		document.getElementById("ingreso").value = " "; 
		//Tambien se puede ingresar varInput.value = " ";
	}
	
}

function cambioOpcion(){
	var laLista = document.getElementsByClassName("laMediaLista");
	var laSelect = document.getElementsByClassName("laMediaSeleccion");	
	var elCambio = document.getElementById("cambio-tarea");;


	for(var i = 0; i <= laLista.length; i++){
		if(laLista[i].value != elCambio.value){
			 laLista[i].innerHTML = elCambio.value;
		}	
	}
}