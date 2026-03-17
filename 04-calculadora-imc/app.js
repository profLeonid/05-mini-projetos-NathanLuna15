'use strict'

function calcularIMC() {
    const nome = document.getElementById("nome")
    const altura = Number(document.getElementById("Altura").value)
    const peso = Number(document.getElementById("Peso").value)
    const resultado = document.getElementById("resultado")
    let status
    const imc = (peso / (altura ** 2)).toFixed(2)

    if (imc < 18.5) {
        resultado.classList.add("baixo")
        status = "Abaixo do peso"
    }
    else if (imc <= 24.9) {
        resultado.classList.add("normal")
        status = "Peso normal"
    }
    else if (imc <= 29.9) {
        resultado.classList.add("sobrepeso")
        status = "Sobrepeso"
    }
    else if (imc <= 34.9) {
        resultado.classList.add("grauI")
        status = "Obesidade grau I"
    }
    else if (imc < 40) {
        resultado.classList.add("grauII")
        status = "Obesidade grau II"
    }
    else if (imc >= 40) {
        resultado.classList.add("grauIII")
        status = "Obesidade grau III"
    }

    resultado.textContent = `seu IMC é de ${imc} e você está ${status}`


}