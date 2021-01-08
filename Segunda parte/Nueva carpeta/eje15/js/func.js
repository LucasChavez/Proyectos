/*promedio de tres numeros*/

 


  var valor1,valor2,valor3;
  valor1=prompt('Ingrese primer valor:','');
  valor1=parseInt(valor1);
  valor2=prompt('Ingrese segundo valor:','');
  valor2=parseInt(valor2);
  valor3=prompt('Ingrese tercer valor:','');
  valor3=parseInt(valor3);
  
  var mifuncion;
  //funcion anonima y la asigno a una variable
  mifuncion=function(valor1,valor2,valor3)
  {
	   var promedio=(valor1+valor2+valor3)/3;

    return promedio;
	  
  }
  alert ("los valores ingresados son: " +valor1 +' ' +valor2 + '' + valor3);
  alert( "El promedio es " + mifuncion(valor1,valor2,valor3));