import { criarResultadoMensagem } from "./ferramentas-criacao/criarRespostaResultado.js"
import { gerarFormulario } from "./ferramentas-criacao/gerarFormularioDaFerramenta.js"
import { calcularAreaCirculo } from "./formulas/areaCirculo.js"
import { calcularAreaLosango } from "./formulas/areaLosango.js"
import { calcularAreaQuadrado } from "./formulas/areaQuadrado.js"
import { calcularAreaRetangulo } from "./formulas/areaRetangulo.js"
import { calcularAreaTriangulo } from "./formulas/areaTriangulo.js"
import { calcularEquacaoSegundoGrau } from "./formulas/equacaoSegundoGrau.js"

const listaBotoesResolucaoDireta = document.querySelectorAll('#resolucao ul li')
const elementoFormularioDireto = document.querySelector('#formularioDireto')
const elementoResultadoDireto = document.querySelector('#resultadoDireto')

listaBotoesResolucaoDireta.forEach(li => {
    const botao = li.children[0]
    botao.addEventListener('click', (e) => {
        e.preventDefault()
        realizarOperacao(botao.dataset.operacao)
    })
})

function realizarOperacao(tipoOperacao) {
    let formulario
    switch (tipoOperacao) {
        case 'operacaoComFracao':
            formulario = gerarFormulario('Informe a operação com fração:', 'Coloque no formulário a expressão fracionária que deseja resolver. Utilize como exemplo: 5/8+8/9', '(\\d+\/\\d+)(\+|-|\*|\/)(\\d+\/\\d+)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
            })
            break;
        case 'simplificarFracao':
            formulario = gerarFormulario('Informe a fração que deseja simplificar', 'Informe a fração que deseja simplificar. Utilize como exemplo 24/12', '(\\d+\/\\d+)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
            })
            break
        case 'mmc':
            formulario = gerarFormulario('Informe a lista de numeros:', 'Informe uma lista de 2 a 3 numeros que deseja tirar o MMC. Utilize como separador "-" ou ","', '(\\d+)(\,|-)(\\d+)(\,|-)?(\\d+)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
            })
            break
        case 'jurosSimples':
            formulario = gerarFormulario('Informe o capital, a taxa e o tempo', 'Informe o capital inicial, a taxa ao mês e o tempo investido, separado por "-". Utilize como exemplo: 900-5%-4', '\\d+-\\d+%-\\d+')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
            })
            break
        case 'jurosCompostos':
            formulario = gerarFormulario('Informe o capital, a taxa e o tempo', 'Informe o capital inicial, a taxa ao mês, o tempo investido e + para valorização e - para desvalorização, separado por "-". Utilize como exemplo: 900-5%-4-+', '\\d+-\\d+%-\\d+-(\+|-)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
            })
            break
        case 'desconto':
            formulario = gerarFormulario('Informe o valor total e o desconto:', 'Informe o valor total e o desconto a ser aplicado, separado por "-". Utilize como exemplo 450-50%', '\\d+-\\d+%-\\d+-(\+|-)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
            })
            break
        case 'equacaoPrimeiroGrau':
            formulario = gerarFormulario('Informe a equação de primeiro grau:', 'Informe a equação de primeiro grau. Utilize como exemplo "2x + 3 = 7 - 2x" (até 4 valores)', '(-|\\+)?(\\d+)(x)?(-|\\+)?(\\d+)(x)?=(-|\\+)?(\\d+)(x)?(-|\\+)?(\\d+)(x)?')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
            })
            break
        case 'equacaoSegundoGrau':
            formulario = gerarFormulario('Informe a equação de segundo grau:', 'Informe a equação de segundo grau. Utilize como exemplo "-2x2 + 4x + 8 = 0"', '(-|\\+)?(\\d+(x|X)2)(-|\\+)(\\d+x)(-|\\+)(\\d+)=(\\d+)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                const expressaoString = e.target.querySelector('.form-input').value
                const objetoResultado = calcularEquacaoSegundoGrau(expressaoString)
                console.log(objetoResultado)
                // const elementoResultado = criarResultadoMensagem(objetoResultado)
                // if (document.querySelector('.conteudo-resolucao-direta-resultado-mensagem')) {
                //     document.querySelector('.conteudo-resolucao-direta-resultado-mensagem').remove()
                // }
                // elementoResultadoDireto.appendChild(elementoResultado)
            })
            break
        case 'pitagoras':
            formulario = gerarFormulario('Informe a equação:', 'Informe a equação que será resolvida utilizando o teorema de Pitágoras. Utilize como exemplo "h2 = 4-2 + 16-2"', '([a-zA-Z0-9]+-2)=([a-zA-Z0-9]+-2)\\+([a-zA-Z0-9]+-2)')
            limparElemento(elementoFormularioDireto)
            elementoFormularioDireto.appendChild(formulario)
            formulario.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('hoje')
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
            })
            break
        case 'areaCirculo':
            formulario = gerarFormulario('Informe o raio do círculo:', 'Informe o raio do círculo. PI padrão utilizado é 3.14151. Utilize como exemplo: "8"', '(\\d+)(\\.||,)?(\\d+)?')
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
            })
            break
        default:
            break;
    }
}

const limparElemento = elemento => elemento.innerHTML = ''