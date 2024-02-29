 const numeroSecreto = Math.floor(Math.random() * 6); // Número secreto entre 0 y 5
let intentos = 3; // Intentos disponibles

document.getElementById("1").onclick = jugar;

function comprobarNumero(numero) {
   
  if (intentos > 0) {
    if (numero === numeroSecreto) {
      // ¡Ganaste!
      alert("¡Has ganado!");
    } else if (numero < numeroSecreto) {
      // El número secreto es mayor
      alert("El número secreto es mayor.");
      intentos--;
    } else {
      // El número secreto es menor
      alert("El número secreto es menor.");
      intentos--;
    }
  } else {
    // Perdiste
    alert("Has perdido. El número secreto era " + numeroSecreto);
  }

  if (intentos === 0) {
    // Deshabilitar el formulario
    document.getElementById("numero").disabled = true;
  }
}
function jugar() {
  const numero = parseInt(document.getElementById("numero").value);
  comprobarNumero(numero);
  
}