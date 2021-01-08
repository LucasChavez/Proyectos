var num1,num2,num3,nota;
num1=prompt('Ingrese nota');
num2=prompt('Ingrese nota');
num3=prompt('Ingrese nota');
num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3);

nota=(num1+num2+num3)/3

if (nota>=7) {
	document.write('Esta aprobado');
}else{
	if (nota>=4) {
		document.write('Nota regular');
	}else{
		document.write('Es burro');
	}
}