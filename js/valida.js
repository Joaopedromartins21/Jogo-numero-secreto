function VerificaSeoChutePossuiUmValorValido(chute) {

    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor Invalido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido:Fale um numero entre: ${menorValor} e ${maiorValor}</div>`
        return

    }   

    if( numero=== numeroSecreto) {
        document.body.innerHTML = `
        <h2>Voce Acertou!</h2>
        <h3> O numero Secreto era ${numeroSecreto}</h3> 

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        ` 
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto e menor <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O numero secreto e maior <i class="fa-solid fa-angle-up"></i></div>`
    }

}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
