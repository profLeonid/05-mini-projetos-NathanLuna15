'use strict'

function removerClasses(){
    const resultado = document.getElementById("resultado")
    resultado.classList.remove("ate", "entre", "acima")
}

function calcularDsconto(){
    const preco = document.getElementById("preco")
    const percentual = document.getElementById("desconto")
    const resultado = document.getElementById("resultado")

    const decimal = percentual.value / 100

    removerClasses()
    if(percentual.value <= 5){
        resultado.classList.add("ate")
    }else if(percentual.value > 5 && percentual.value <= 10){
        resultado.classList.add("entre")
    }else{
        resultado.classList.add("acima")
    }
    let valorFinal = preco.value - (preco.value * decimal)
    let valorEconomizado = (preco.value * decimal).toFixed(2)

    resultado.textContent = `valor economizado ${valorEconomizado} valor final ${valorFinal}`

}