let arreglo1 = [1,0,2,3,4];
let arreglo2 = [4,3,6,7,8,13];


const sumaArreglos = (arreglo1, arreglo2) => {
  
    const resultado = [];
    for (let i = 0; i < arreglo1.length; i++) {
      resultado.push(arreglo1[i] + arreglo2[i]);
    }
  
    return resultado;
  };
  
  const resultado = sumaArreglos(arreglo1, arreglo2);
  
  console.log(resultado);
