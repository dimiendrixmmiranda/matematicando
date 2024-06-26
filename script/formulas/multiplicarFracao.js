import { simplificarFracao } from "./simplificarFracao.js"

export function multiplicarFracao(stringExpressao) {
    const expressao = stringExpressao.trim()
    const ladoA = expressao.split('*')[0]
    const ladoB = expressao.split('*')[1]

    const numeradorA = ladoA.split('/')[0]
    const denominadorA = ladoA.split('/')[1]
    const numeradorB = ladoB.split('/')[0]
    const denominadorB = ladoB.split('/')[1]

    const stringExpressaoFinal = `${numeradorA}/${denominadorA} * ${numeradorB}/${denominadorB} = ${numeradorA}*${numeradorB}/${denominadorA}*${denominadorB} = ${numeradorA * numeradorB}/${denominadorA * denominadorB}`

    const resultadoSemSimplificar = `${numeradorA * numeradorB}/${denominadorA * denominadorB}`
    const arrayDeSimplificacao = simplificarFracao(resultadoSemSimplificar)
    const resultadoSimplificado = `${arrayDeSimplificacao.resultado[0]}/${arrayDeSimplificacao.resultado[1]}`
    
    return {
        expressaoInicial: [ladoA, ladoB, '*'],
        montagemDaConta: stringExpressaoFinal,
        dadosDoMMC: null,
        resultadoSemSimplificar,
        arrayDeSimplificacao,
        resultadoSimplificado
    }
}