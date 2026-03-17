'use strict'

function removerClasses() {
    const resultado = document.getElementById("resultado")
    resultado.classList.remove("baixa", "media", "alta")
}

function calcularMedia() {
    const valor1 = Number(document.getElementById("nota1").value)
    const valor2 = Number(document.getElementById("nota2").value)
    const valor3 = Number(document.getElementById("nota3").value)
    const result = document.getElementById("resultado")
    let status

    const media = (valor1 + valor2 + valor3) / 3

    removerClasses()
    if (media < 5) {
        result.classList.add("baixa")
        status = "Reprovado"

    } else if (media >= 5 && media < 7) {
        result.classList.add("media")
        status = "Recuperação"

    } else {
        result.classList.add("alta")
        status = "Aprovado"
    }
    result.textContent = `Com uma media de ${media.toFixed(2)} você esta ${status}`




}