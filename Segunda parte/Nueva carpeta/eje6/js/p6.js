var num1,num2,num3;
num1=parseInt(prompt('Ingrese numero'));
num2=parseInt(prompt('Ingrese numero'));
num3=parseInt(prompt('Ingrese numero'));

if (num1>num2 && num1>num3) {
	document.write(num1+' Es mayor');
}else{
	if (num2>num3) {
		document.write(num2+' Es mayor');
	}else{
		document.write(num3+' Es mayor');
	}
}