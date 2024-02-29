const colores = ["grey", "blue"];
let indiceColor = 0; 

setInterval(function() {
  const texto = document.getElementById("texto");

 
  texto.style.color = colores[indiceColor];

 
  indiceColor = (indiceColor + 1) % colores.length;
}, 1000);