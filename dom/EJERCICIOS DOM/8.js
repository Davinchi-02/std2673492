const imagenes = [
    "descarga (1).jpg",
    "descarga (2).jpg",
    "descarga (3).jpg",
    "descarga (4).jpg",
    "descarga.jpg",
  ];
  
  function mostrarImagenAleatoria() {
  
    const imagen = document.getElementById("imagen");
  
   
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  
   
    const imagenAleatoria = imagenes[indiceAleatorio];
  
    
    imagen.src = imagenAleatoria;
   
  }