var num1,num2;
num1=prompt("Ingrese el primero numero");
num2=prompt("Ingrese el segundo numero");
num1=parseInt(num1);
num2=parseInt(num2);


if (num1>num2) {
	document.write('El numero '+num1+' es mayor');
}else{
	document.write('El numero '+num2+' es mayor');
}