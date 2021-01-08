/*Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) 
luego mostrar la palabra traducida en inglés. 
Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. 

*/

 var palabra;
  palabra=prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato) para traducirlas al ingles','');
  switch (palabra) {
    case 'casa':document.write('house');
                break;
    case 'mesa':document.write('table');
                break;
    case 'perro':document.write('dog');
                 break;
    case 'gato':document.write('cat');
                break;
	 default:
	            document.write("no CONCUERDA CON LO INGRESADO");
				break;
  }