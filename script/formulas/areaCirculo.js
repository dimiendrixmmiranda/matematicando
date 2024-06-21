export function calcularAreaCirculo(expressaoString) {
    const expressaoFormatada = expressaoString.replace('.', ',').trim()
    const array = []
    const areaCirculo = Math.PI * (Math.pow(parseFloat(expressaoFormatada), 2))
    const formula = `Área = π * r²`
    const montagemDaConta = `Área = ${(Math.PI).toFixed(5)} * ${parseFloat(expressaoFormatada).toFixed(2)}² = ${(areaCirculo).toFixed(2)}`
    array.push(formula)
    array.push(montagemDaConta)

    const objetoMontagem = {
        resultado: areaCirculo,
        montagem: array
    }
    return objetoMontagem
}