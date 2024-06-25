import { criarElemento } from "./criarElemento.js";

export function criarResultadoMensagem(objetoResultado){
    const div = criarElemento('div', 'conteudo-resolucao-direta-resultado-item')
    objetoResultado.montagem.forEach(linha => {
        const p = criarElemento('p', 'conteudo-resolucao-direta-resultado-item-p', linha)
        div.appendChild(p)
    })
    return div
}