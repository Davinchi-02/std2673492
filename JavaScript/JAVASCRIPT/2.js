function sumar(arreglo){
    let suma = 0

    for (const elemento of arreglo) {
        suma += elemento;
      }
      return suma;
    }
    
    const numeros = [34, 43, 65, 3, 86];
    const sumaTotal = sumar(numeros);
    console.log(`La suma total es: ${sumaTotal}`);