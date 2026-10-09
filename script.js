function calcular() {

    let dinheiro = document.getElementById("dinheiro").value;

    let litros = dinheiro / 7;

    let km = litros * 20;

    document.getElementById("resultado").innerHTML =
        "Você pode comprar " + litros.toFixed(2) + " litros de combustível e percorrer " + km.toFixed(2) + " km.";
}


function calcularIMC() {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);

    document.getElementById("resultadoIMC").innerHTML =
        "Seu IMC é: " + imc.toFixed(2);
}