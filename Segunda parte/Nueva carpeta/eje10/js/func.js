/*Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12. 
*/

var f;
  var base;
  var altura;
  var superficie;
  var conta1=0;
  for(f=1;f<=3;f++)
  {
    base=prompt('Ingrese la base:','');
    base=parseInt(base);
    altura=prompt('Ingrese la altura:','');
    altura=parseInt(altura);
    superficie=base*altura/2;
    if (superficie>12)
    {
      conta1++;
    }
    document.write('Triángulo nro:'+f+'<br>');
    document.write('Base:'+base+'<br>');
    document.write('Altura:'+altura+'<br>');
    document.write('Superficie:'+superficie+'<br>');    
  }
  document.write('Cantidad de triángulos con superficie mayor a 12:'+conta1);