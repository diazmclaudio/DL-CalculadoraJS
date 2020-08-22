var operandoa;
var operandob;
var operacion;

function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var exponente = document.getElementById('exponente');
	var logaritmo = document.getElementById('logaritmo');
	var raiz = document.getElementById('raiz');
	var potencia = document.getElementById('potencia');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');

	//eventos de click
	uno.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "1";
	}
	dos.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "2";
	}
	tres.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "3";
	}
	cuatro.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "4";
	}
	cinco.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "5";
	}
	seis.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "6";
	}
	siete.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "7";
	}
	ocho.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "8";
	}
	nueve.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "9";
	}
	cero.onclick = function(e){
  		resultado.textContent = resultado.textContent  + "0";
	}
	reset.onclick = function(e){
  		resetear();
	}
	exponente.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "Exp";
  		resolver();
	}
	logaritmo.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "Log";
  		resolver();
	}
	raiz.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "√";
  		resolver();
	}
	potencia.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "^2";
  		resolver();
	}
	igual.onclick = function(e){
  		operandob = resultado.textContent;
  		resolver();
	}
}


function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "Exp":
			res = Math.exp(parseFloat(operandoa)); 
			break;

		case "Log":
		    res = Math.log(parseFloat(operandoa)); 
		    break;

		case "√":
			res = Math.sqrt(parseFloat(operandoa));
			break;

		case "^2":
			res = Math.pow(parseFloat(operandoa),2);
			break;
	}
	resetear();
	resultado.textContent = res;
}
