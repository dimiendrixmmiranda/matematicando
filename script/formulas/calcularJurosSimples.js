export function calcularjurosSimples(expressaoString) {
    const expressaoFormatada = expressaoString.split('-')
    const numerosConvertidos = []
    const array = []
    expressaoFormatada.forEach(elemento => {
        if (elemento.includes('%')) {
            const elementoSemPorcentagem = elemento.split('%')[0]
            numerosConvertidos.push(parseFloat(elementoSemPorcentagem))
        } else {
            numerosConvertidos.push(parseFloat(elemento))
        }
    })
    const resultadoJuros = numerosConvertidos[0] * (numerosConvertidos[1] / 100) * numerosConvertidos[2]
    const resultadoEmCimaDoMontante = resultadoJuros + numerosConvertidos[0]

    const formula = `J = P * i * t`
    const linha1 = `J = ${numerosConvertidos[0]} * (${numerosConvertidos[1] / 100}) * ${numerosConvertidos[2]}`
    const linha2 = `J = ${numerosConvertidos[0] * (numerosConvertidos[1] / 100) * numerosConvertidos[2]}`
    const linha3 = `M = P + J`
    const linha4 = `M = ${numerosConvertidos[0]} + ${resultadoJuros}`
    const linha5 = `M = ${numerosConvertidos[0] + resultadoJuros}`

    array.push(formula)
    array.push(linha1)
    array.push(linha2)
    array.push(linha3)
    array.push(linha4)
    array.push(linha5)

    const objetoMontagem = {
        resultado: resultadoJuros,
        montagem: array
    }
    return objetoMontagem
}