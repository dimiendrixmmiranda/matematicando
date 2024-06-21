export function calcularAreaLosango(expressaoString) {
    const array = []
    const expressaoFormatada = expressaoString.trim().split('-')
    
    const diagonalMaior = parseFloat(expressaoFormatada[0].replace(',', '.'))
    const diagonalMenor = parseFloat(expressaoFormatada[1].replace(',', '.'))
    const areaLosango = (diagonalMaior * diagonalMenor) / 2

    const formula = `Área = D * d / 2`
    const montagemDaConta = `Área = ${diagonalMaior.toFixed(2)} * ${diagonalMenor.toFixed(2)} / 2 = ${areaLosango.toFixed(2)}`
    array.push(formula)
    array.push(montagemDaConta)

    const objetoMontagem = {
        resultado: areaLosango,
        montagem: array
    }
    return objetoMontagem
}