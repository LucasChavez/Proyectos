/*ingreso valores en un vector y los sumo*/
  var vec=[];
  var valor;
  var indice=0;
  do {
    valor=prompt('Ingrese un valor entero (0 para finalizar)','');
    valor=parseInt(valor);
    if (valor!=0)
    {
      vec[indice]=valor;
      indice++;
    }
  } while (valor!=0);
  var f;
  var suma=0;
  for(f=0;f<vec.length;f++)
  {
    suma=suma+vec[f];
  }
  document.write('Se ingresaron '+vec.length+' valores<br>');
  document.write('La suma de los valores ingresados es:'+suma);