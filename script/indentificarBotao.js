import { criarContainerFracao } from "./ferramentasCriacao/criarContainerFracao.js"
import { criarContainerMMC } from "./ferramentasCriacao/criarContainerMMC.js"
import { criarElemento } from "./ferramentasCriacao/criarElemento.js"
import { criarResultadoMensagem } from "./ferramentasCriacao/criarRespostaResultado.js"
import { gerarFormulario } from "./ferramentasCriacao/gerarFormularioDaFerramenta.js"
import { calcularAreaCirculo } from "./formulas/areaCirculo.js"
import { calcularAreaLosango } from "./formulas/areaLosango.js"
import { calcularAreaQuadrado } from "./formulas/areaQuadrado.js"
import { calcularAreaRetangulo } from "./formulas/areaRetangulo.js"
import { calcularAreaTriangulo } from "./formulas/areaTriangulo.js"
import { calcularJurosCompostos } from "./formulas/calcularJurosCompostos.js"
import { calcularjurosSimples } from "./formulas/calcularJurosSimples.js"
import { calcularDesconto } from "./formulas/desconto.js"
import { calcularEquacaoSegundoGrau } from "./formulas/equacaoSegundoGrau.js"
import { mmc } from "./formulas/mmc.js"
import { operacaoComFracao } from "./formulas/operacaoComFracao.js"
import { calcularPitagoras } from "./formulas/pitagoras.js"
import { simplificarFracao } from "./formulas/simplificarFracao.js"

const listaBotoesResolucaoDireta = document.querySelectorAll('#resolucao ul li')
const elementoFormularioDireto = document.querySelector('#formularioDireto')
const elementoResultadoDireto = document.querySelector('#resultadoDireto')
const listaBtns = document.querySelectorAll('[data-operacao]')

listaBotoesResolucaoDireta.forEach(li => {
    const botao = li.children[0]
    botao.addEventListener('click', (e) => {
        e.preventDefault()
        listaBtns.forEach(btn => btn.classList.remove('active'))
        botao.classList.add('active')
        realizarOperacao(botao.dataset.operacao)
    })
})

function realizarOperacao(tipoOperacao) {
    let formulario
    switch (tipoOperacao) {
        case 'operacaoComFracao':
            formulario = gerarFormulario('Informe a operação com fração:', 'Coloque no formulário a expressão fracionária que deseja resolver. Utilize como exemplo: 5/8+8/9', '(\\d+)\\/(\\d+)(\\+|-|\\*|\\/)(\\d+)\\/(\\d+)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = operacaoComFracao(expressaoString)
                console.log(objetoResultado)
                const elementoResultado = criarElemento('div', 'operacao-fracao-container-item')
                
                objetoResultado.montagemDaConta.split(' ').forEach(elemento => {
                    if (elemento.length <= 1) {
                        const sinal = criarElemento('p', 'sinal', elemento)
                        elementoResultado.appendChild(sinal)
                    } else {
                        const elementoFracao = criarElemento('div', 'container-fracao-item')
                        const pNumerador = criarElemento('p', 'numerador', elemento.split('/')[0])
                        const spanBarra = criarElemento('span', 'barra')
                        const pDenominador = criarElemento('p', 'numerador', elemento.split('/')[1])
                        elementoFracao.appendChild(pNumerador)
                        elementoFracao.appendChild(spanBarra)
                        elementoFracao.appendChild(pDenominador)
                        elementoResultado.appendChild(elementoFracao)
                    }
                })

                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                const divContainer = criarElemento('div', 'operacao-fracao-container')
                const titulo1 = criarElemento('h4', '', 'O resultado da sua operação fracionária é:')
                const titulo2 = criarElemento('h4', '', 'Simplificando o resultado temos:')
                const containerSimplificaoFracao = criarContainerFracao(objetoResultado.arrayDeSimplificacao)
                divContainer.appendChild(titulo1)
                divContainer.appendChild(elementoResultado)
                divContainer.appendChild(titulo2)
                divContainer.appendChild(containerSimplificaoFracao)
                
                containerSimplificaoFracao.children[containerSimplificaoFracao.children.length - 1].remove()
                elementoResultadoDireto.appendChild(divContainer)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break;
        case 'simplificarFracao':
            formulario = gerarFormulario('Informe a fração que deseja simplificar', 'Informe a fração que deseja simplificar. Utilize como exemplo 24/12', '(\\d+\/\\d+)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = simplificarFracao(expressaoString)
                const elementoResultado = criarContainerFracao(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                elementoResultado.children[elementoResultado.children.length - 1].remove()
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'mmc':
            formulario = gerarFormulario('Informe a lista de numeros:', 'Informe uma lista de 2 a 3 numeros que deseja tirar o MMC. Use como separador "-". Utilize como exemplo: 10-12 ou 10-12-15', '(\\d+)(\,|-)(\\d+)(\,|-)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = mmc(expressaoString)
                const elementoResultado = criarContainerMMC(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'jurosSimples':
            formulario = gerarFormulario('Informe o capital, a taxa e o tempo', 'Informe o capital inicial, a taxa ao mês e o tempo investido, separado por "-". Utilize como exemplo: 900-5%-4', '\\d+-\\d+%-\\d+')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularjurosSimples(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'jurosCompostos':
            formulario = gerarFormulario('Informe o capital, a taxa e o tempo', 'Informe o capital inicial, a taxa ao mês, o tempo investido e + para valorização e - para desvalorização, separado por "-". Utilize como exemplo: 900-5%-4-+', '(\\d+)-(\\d+)%-(\\d+)(\\+|-)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                console.log(expressaoString)
                const objetoResultado = calcularJurosCompostos(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'desconto':
            formulario = gerarFormulario('Informe o valor total e o desconto:', 'Informe o valor total e o desconto a ser aplicado, separado por "-". Utilize como exemplo 450-50%', '(\\d+)-(\\d+)%')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularDesconto(expressaoString)
                console.log(objetoResultado)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'equacaoPrimeiroGrau':
            formulario = gerarFormulario('Informe a equação de primeiro grau:', 'Informe a equação de primeiro grau. Utilize como exemplo "2x + 3 = 7 - 2x" (até 4 valores)', '(-|\\+)?((\\d+)|(\\d+x))?(-|\\+)?((\\d+)|(\\d+x))?=(-|\\+)?((\\d+)|(\\d+x))?(-|\\+)?((\\d+)|(\\d+x))?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'equacaoSegundoGrau':
            formulario = gerarFormulario('Informe a equação de segundo grau:', 'Informe a equação de segundo grau. Utilize como exemplo "-2x2+4x+8=0"', '(-|\\+)?(\\d+(x|X)2)(-|\\+)(\\d+x)(-|\\+)(\\d+)=(\\d+)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularEquacaoSegundoGrau(expressaoString)
                console.log(objetoResultado)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'pitagoras':
            formulario = gerarFormulario('Informe a equação:', 'Informe a equação que será resolvida utilizando o teorema de Pitágoras. Utilize como exemplo "h2=4-2+16-2"', '(\\w+)-2=(\\w+)-2\\+(\\w+)-2')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularPitagoras(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'areaQuadrado':
            formulario = gerarFormulario('Informe o lado do quadrado:', 'Informe o lado do quadrado. Utilize como exemplo: "5"', '(\\d+)(\\.||,)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularAreaQuadrado(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'areaRetangulo':
            formulario = gerarFormulario('Informe os lados do retangulo:', 'Informe os lados do retangulo, separados por "-". Utilize como exemplo: "5-8"', '(\\d+)(\\.||,)?(\\d+)?-(\\d+)(\\.||,)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularAreaRetangulo(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'areaTriangulo':
            formulario = gerarFormulario('Informe a base e a altura do triângulo:', 'Informe a base e a altura do triângulo, separados por "-". Utilize como exemplo: "10-5"', '(\\d+)(\\.||,)?(\\d+)?-(\\d+)(\\.||,)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularAreaTriangulo(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'areaLosango':
            formulario = gerarFormulario('Informe a diagonal maior e menor:', 'Informe a diagonal maior e a diagonal menor do losango, separados por "-". Utilize como exemplo: "8-4"', '(\\d+)(\\.||,)?(\\d+)?-(\\d+)(\\.||,)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularAreaLosango(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        case 'areaCirculo':
            formulario = gerarFormulario('Informe o raio do círculo:', 'Informe o raio do círculo. PI padrão utilizado é 3.1415. Utilize como exemplo: "8"', '(\\d+)(\\.||,)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularAreaCirculo(expressaoString)
                const elementoResultado = criarResultadoMensagem(objetoResultado)
                if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                    document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                }
                elementoResultadoDireto.appendChild(elementoResultado)
                limparFocarInput(e.target.querySelector('.form-input'))
            })
            break
        default:
            break;
    }
}

const limparElemento = elemento => elemento.innerHTML = ''

const limparFocarInput = input => {
    input.value = ''
    input.focus()
}