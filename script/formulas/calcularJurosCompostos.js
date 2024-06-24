export function calcularJurosCompostos(expressaoString) {
    const array = []
    const expressaoFormatada = expressaoString.split('-')
    const capital = parseFloat(expressaoFormatada[0])
    const taxa = parseFloat(expressaoFormatada[1].split('%')[0])
    const tempo = parseInt(expressaoFormatada[2].match(/\d+/g)[0])
    // valorizacao é true, desvalorização = false
    const valorizacaoOuDesvalorizacao = expressaoFormatada[2].match(/(\+|\-)/g) ? true : false
    let formula
    let linha1
    let linha2
    let linha3

    let resultadoMontante
    if (valorizacaoOuDesvalorizacao) {
        resultadoMontante = (capital * Math.pow((1 + (taxa / 100)), tempo)).toFixed(2)
    } else {
        resultadoMontante = (capital * Math.pow((1 - (taxa / 100)), tempo)).toFixed(2)
    }

    if (valorizacaoOuDesvalorizacao) {
        formula = `M = C * (1 + i)ᵗ`
        linha1 = `M = ${capital} * (1 + ${taxa}) <sup>${tempo}<sup/>`
        linha2 = `M = ${capital} * (${(Math.pow(1 + (taxa / 100), tempo)).toFixed(2)})` 
        linha3 = `M = ${resultadoMontante}`
    } else {
        formula = `M = C * (1 - i)ᵗ`
        linha1 = `M = ${capital} * (1 - ${taxa}) <sup>${tempo}<sup/>`
        linha2 = `M = ${capital} * (${(Math.pow(1 - (taxa / 100), tempo)).toFixed()})` 
        linha3 = `M = ${resultadoMontante}`
    }
    array.push(formula)
    array.push(linha1)
    array.push(linha2)
    array.push(linha3)

    const objetoMontagem = {
        resultado: resultadoMontante,
        montagem: array
    }

    return objetoMontagem
}