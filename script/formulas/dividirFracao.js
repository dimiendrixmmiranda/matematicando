import { simplificarFracao } from "./simplificarFracao.js"

export function dividirFracao(stringExpressao) {
    const quebrarExpressao = stringExpressao.match(/([0-9]+\/[0-9]+)/g)
    const ladoA = quebrarExpressao[0]
    const ladoB = quebrarExpressao[1]

    const numeradorA = ladoA.split('/')[0]
    const denominadorA = ladoA.split('/')[1]

    const numeradorB = ladoB.split('/')[0]
    const denominadorB = ladoB.split('/')[1]

    const resultadoFinal = `${numeradorA * denominadorB}/${denominadorA * numeradorB}`
    const montagemDaConta = `${ladoA} : ${ladoB} = ${ladoA} * ${denominadorB}/${numeradorB} = ${resultadoFinal}`
    const arrayDeSimplificacao = simplificarFracao(resultadoFinal)
    const resultadoSimplificado = `${arrayDeSimplificacao.resultado[0]}/${arrayDeSimplificacao.resultado[1]}`

    return {
        expressaoInicial: [ladoA, ladoB, '/'],
        montagemDaConta: montagemDaConta,
        dadosDoMMC: null,
        resultadoSemSimplificar: resultadoFinal,
        arrayDeSimplificacao: arrayDeSimplificacao,
        resultadoSimplificado: resultadoSimplificado
    }
}
