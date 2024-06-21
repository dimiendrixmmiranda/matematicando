export function calcularAreaTriangulo(expressaoString) {
    const array = []
    const expressaoFormatada = expressaoString.trim().split('-')
    
    const base = parseFloat(expressaoFormatada[0].replace(',', '.'))
    const altura = parseFloat(expressaoFormatada[1].replace(',', '.'))
    const areaTriangulo = (base * altura) / 2

    const formula = `Área = b * h / 2`
    const montagemDaConta = `Área = ${base.toFixed(2)} * ${altura.toFixed(2)} / 2 = ${areaTriangulo.toFixed(2)}`
    array.push(formula)
    array.push(montagemDaConta)

    const objetoMontagem = {
        resultado: areaTriangulo,
        montagem: array
    }
    return objetoMontagem
}