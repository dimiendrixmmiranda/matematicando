import { criarElemento } from "./criarElemento.js"

export function gerarFormulario(textoLabel, informacoesInput, pattern) {
    const formulario = criarElemento('form', 'conteudo-resolucao-direta-formulario-form')
    const label = criarElemento('label', 'form-label', textoLabel, 'resolucaoFormularioInput', 'text')
    const input = criarElemento('input', 'form-input', '', 'resolucaoFormularioInput', 'text')
    input.setAttribute('pattern', pattern)
    const btn = criarElemento('button', 'form-btn', 'Resolver!', '', 'submit')
    const btnInformacoes = criarElemento('button', 'form-btn-informacoes', '<i class="fa-solid fa-circle-info"></i>', '', 'button')
    btnInformacoes.dataset.content = informacoesInput
    
    formulario.appendChild(label)
    formulario.appendChild(input)
    formulario.appendChild(btnInformacoes)
    formulario.appendChild(btn)
    return formulario
}