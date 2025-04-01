function calcularIMC(){

    // Entrada
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

//Processamento

let imc = peso / (altura * altura);

// Saida
document.getElementById("exibir").textContent = "Valor do IMC :" + imc.toFixed(2);

//Condicionais 
if (imc <= 18.5){
    document.getElementById("classificacao").textContent = "Classificação do IMC : Abaixo do Peso"
}
else if (imc >= 18.5 && imc <= 24.9){
    document.getElementById("classificacao").textContent = "Classificação do IMC : Peso Normal"
}
else if (imc >= 25.0 && imc <= 29.9) {
    document.getElementById("classificacao").textContent = "Classificação do IMC : Sobre Peso"
}
else if (imc >= 30.0 ) {
    document.getElementById("classificacao").textContent = "Classificação do IMC : Obeso"
}

else {
    document.getElementById("classificacao").textContent = "Classificação do IMC : Preencha os Campos!"
    document.getElementById("exibir").textContent = "Valor do IMC : Preencha os Campos!" ;
}

}