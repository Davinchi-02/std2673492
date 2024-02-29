function agregarfilas (){
      
        const tabla = document.querySelector("table");
      
        const nuevaFila = document.createElement("tr");
      
        const celda1 = document.createElement("td");
        const celda2 = document.createElement("td");
      
        celda1.textContent = "hola";
        celda2.textContent = "hola";
      
        nuevaFila.appendChild(celda1);
        nuevaFila.appendChild(celda2);
        
        celda1.style.border= "solid black 1px"
        celda2.style.border= "solid black 1px"

      
        tabla.querySelector("tbody").appendChild(nuevaFila);
      
}