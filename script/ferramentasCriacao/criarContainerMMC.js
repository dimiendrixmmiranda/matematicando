import { criarElemento } from "./criarElemento.js"

export function criarContainerMMC(objetoMontagem){
    const divResolucaoDireta = criarElemento('div', 'conteudo-resolucao-direta-resultado-item')
    const containerDiv = criarElemento('div', 'container-mmc')
    objetoMontagem.montagem.forEach(linha => {
        const elementoLinha = criarElemento('div')
        const n1 = criarElemento('p','n1', linha.n1)
        const n2 = criarElemento('p','n2', linha.n2)
        elementoLinha.appendChild(n1)
        elementoLinha.appendChild(n2)
        if(linha.n3 != undefined){
            const n3 = criarElemento('p','n3', linha.n3)
            elementoLinha.appendChild(n3)
        }
        const divisor = criarElemento('p', 'divisor', linha.divisor)
        elementoLinha.appendChild(divisor)
        containerDiv.appendChild(elementoLinha)
    });

    const resultado = criarElemento('p', 'resultado-mmc', objetoMontagem.resultado)
    containerDiv.appendChild(resultado)
    divResolucaoDireta.appendChild(containerDiv)
    return divResolucaoDireta
}