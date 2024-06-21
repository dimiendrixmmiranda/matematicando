export function calcularAreaRetangulo(expressaoString) {
    const array = []
    const expressaoFormatada = expressaoString.trim().split('-')
    
    const base = parseFloat(expressaoFormatada[0].replace(',', '.'))
    const altura = parseFloat(expressaoFormatada[1].replace(',', '.'))
    const areaRetangulo = base * altura

    const formula = `Área = b * h / 2`
    const montagemDaConta = `Área = ${base.toFixed(2)} * ${altura.toFixed(2)} = ${areaRetangulo.toFixed(2)}`
    array.push(formula)
    array.push(montagemDaConta)

    const objetoMontagem = {
        resultado: areaRetangulo,
        montagem: array
    }
    return objetoMontagem
}