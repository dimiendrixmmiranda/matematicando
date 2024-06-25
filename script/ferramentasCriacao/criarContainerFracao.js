import { criarElemento } from "./criarElemento.js";

export function criarContainerFracao(objetoResultado){
    console.log(objetoResultado)
    const containerPai = criarElemento('div', 'container-fracao')
    objetoResultado.montagem.forEach(array => {
        const containerFracao = criarElemento('div', 'container-fracao-item')
        const pNumerador = criarElemento('p', 'numerador', array[0])
        const span = criarElemento('span', 'barra')
        const pDenominador = criarElemento('p', 'denominador', array[1])
        const sinal = criarElemento('p', 'sinal', '=')
        containerFracao.appendChild(pNumerador)
        containerFracao.appendChild(span)
        containerFracao.appendChild(pDenominador)
        containerPai.appendChild(containerFracao)
        containerPai.appendChild(sinal)
    })
    return containerPai
}