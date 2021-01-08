var num1,num2,num3;

num1=parseInt(prompt('Ingrese un numero'));
num2=parseInt(prompt('Ingrese un numero'));
num3=parseInt(prompt('Ingrese un numero'));

if (num1<10 || num2<10 || num3<10) {
	document.write('Uno de los numeros es menor a 10 ');
}else{
	document.write('Todos los numeros estan bien');
}