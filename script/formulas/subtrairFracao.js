import { mmc } from "./mmc.js"
import { simplificarFracao } from "./simplificarFracao.js"

export function subtrairFracoes(stringExpressao) {
    const expressao = stringExpressao.trim()
    const ladoA = expressao.split('-')[0]
    const ladoB = expressao.split('-')[1]

    const numeradorA = parseInt(ladoA.split('/')[0])
    const denominadorA = parseInt(ladoA.split('/')[1])
    const numeradorB = parseInt(ladoB.split('/')[0])
    const denominadorB = parseInt(ladoB.split('/')[1])

    const arrayDeDenominadores = [denominadorA, denominadorB]

    const informacoesMMC = mmc(`${denominadorA}-${denominadorB}`)
    const divisorComum = informacoesMMC.montagem.map(linha => linha.divisor).reduce((a, b) => a * b)

    const novoNumeradorA = (divisorComum / denominadorA) * numeradorA
    const novoNumeradorB = (divisorComum / denominadorB) * numeradorB
    const stringExpressaoFinal = `${numeradorA}/${denominadorA} - ${numeradorB}/${denominadorB} = ${novoNumeradorA}/${divisorComum} - ${novoNumeradorB}/${divisorComum} = ${novoNumeradorA - novoNumeradorB}/${divisorComum}`

    const resultadoSemSimplificar = `${novoNumeradorA - novoNumeradorB}/${divisorComum}`
    const arrayDeSimplificacao = simplificarFracao(resultadoSemSimplificar)
    const resultadoSimplificado = `${arrayDeSimplificacao.resultado[0]}/${arrayDeSimplificacao.resultado[1]}`

    return {
        expressaoInicial: [ladoA, ladoB, '-'],
        montagemDaConta: stringExpressaoFinal,
        dadosDoMMC: informacoesMMC,
        resultadoSemSimplificar,
        arrayDeSimplificacao,
        resultadoSimplificado
    }
}