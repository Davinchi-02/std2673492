
document.getElementById("boton").onclick = imprimir;
 
function imprimir() {
    let n1 = document.getElementById("1").value;
   const resultado = n1*3931.78;
document.getElementById("2").innerHTML = resultado;
console.log(resultado)
}


   