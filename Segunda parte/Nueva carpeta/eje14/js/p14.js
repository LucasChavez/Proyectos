var array=[];
var indice=0;
var valor;

	do{
 	   valor=parseInt(prompt('Ingrese un valor'));
 	   if (valor!=0) {
	 	   	array[indice]=valor;
	 	   	indice++;
 	   }	
	}while(valor!=0);

	var i;
	var suma=0;
	for (i=0;i<array.length;i++){
		suma=suma+array[i];
	}

	document.write('La suma es de '+suma);
	document.write('Se ingresaron '+array.length);