let arreglo1 = [5,2,3];
let arreglo2 = [2,30,5];

let combinar = (arreglo1, arreglo2) =>{
    let nuevoarreglo = [...arreglo1,...arreglo2];
    let set = new Set(nuevoarreglo);
    return Array.from(set);
};
let resultado = combinar(arreglo1,arreglo2);
console.log(resultado);

