function calcularArea(){
    let b = document.getElementById("b").value;
    let a = document.getElementById("a").value;
    const resultado = b*a;
    document.getElementById("2").innerHTML = resultado;
    console.log(resultado);
}