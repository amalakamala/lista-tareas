//funcion que agrega texto desde el input a una lista, siendo visible esta en el html
function nombreFuncion(){
	var varInput = document.getElementById("ingreso"); 
	var contListas = document.getElementsByClassName("listas");

	contListas[0].innerHTML += "<li>"+ varInput.value + "</li>" + "<br>"; 

	document.getElementById("ingreso").value = " "; 
	//Tambien se puede ingresar varInput.value = " ";
}