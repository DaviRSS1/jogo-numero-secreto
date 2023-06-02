function verificaAcerto(chute){
    const numero = +chute

    if(chuteInvalido()){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div> Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você Acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3> 

            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})