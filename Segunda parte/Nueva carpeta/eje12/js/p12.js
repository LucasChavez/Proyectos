function mostrarMenos(x1,x2,x3){
	if (x1<x2 && x1<x3) {
		document.write('El menor es '+x1);
	}else{
		if (x2<x3) {
			document.write('El menor es '+x2);
		}else{
			document.write('El menor es '+x3);
		}
	}
}




var num1,num2,num3;
num1=parseInt(prompt('Ingrese un numero'));
num2=parseInt(prompt('Ingrese un numero'));
num3=parseInt(prompt('Ingrese un numero'));

document.write('Se ingresaron 3 numeros '+num1+' '+num2+' '+num3);
mostrarMenos(num1,num2,num3);
