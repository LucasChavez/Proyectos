 /*Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'. 
 */
  var num1,num2,num3;
  num1=prompt('Ingrese primer valor','');
  num1=parseInt(num1);
  num2=prompt('Ingrese segundo valor','');
  num2=parseInt(num2);
  num3=prompt('Ingrese tercer valor','');
  num3=parseInt(num3);
  if (num1<10 || num2<10 || num3<10)
  {
    document.write('Alguno de los números es menor a diez');
  }