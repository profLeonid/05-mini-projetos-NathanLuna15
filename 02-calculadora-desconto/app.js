'use strict'
function calcularDsconto(){
    const preco = document.getElementById("preco")
    const percentual = document.getElementById("desconto")
    const resultado = document.getElementById("resultado")

    const decimal = percentual.value / 100

    if(percentual.value <= 5){
        resultado.classList("ate")
    }else if(percentual.value > 5 && percentual.value <= 10){
        resultado.classList("entre")
    }else{
        resultado.classList.add("acima")
    }
    let valorFinal = preco.value =preco.value - (preco.value * decimal)
    let valorEconomizado = preco.value * decimal

    resultado.textContent = `valor economizado ${valorEconomizado} valor final ${valorFinal}`

}