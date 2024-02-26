function mostrar(arreglo) {
  
    return arreglo[arreglo.length - 1];
  }
  
  const arreglo = [2, 5, 3, 9];
  const ultimoElemento = mostrar(arreglo);
  console.log(`El último elemento del arreglo es: ${ultimoElemento}`);