/*promedio de tres numeros*/
function promediar(x1,x2,x3)
  {
    var promedio=(x1+x2+x3)/3;
    return promedio;
  }

  var valor1,valor2,valor3;
  valor1=prompt('Ingrese primer valor:','');
  valor1=parseInt(valor1);
  valor2=prompt('Ingrese segundo valor:','');
  valor2=parseInt(valor2);
  valor3=prompt('Ingrese tercer valor:','');
  valor3=parseInt(valor3);
  document.write('Los tres valores ingresados son '+valor1+' '+valor2+' '+valor3+'<br>'); 
  var pro;
  pro=promediar(valor1,valor2,valor3);
  document.write('El promedio es :'+pro);