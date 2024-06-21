export function calcularAreaQuadrado(expressaoString) {
    const array = []
    const expressaoFormatada = expressaoString.trim().replace(',', '.')
    
    const lado = expressaoFormatada
    const areaQuadrado = Math.pow(lado, 2)

    const formula = `Área = b * h / 2`
    const montagemDaConta = `Área = ${lado}² = ${areaQuadrado.toFixed(2)}`
    array.push(formula)
    array.push(montagemDaConta)

    const objetoMontagem = {
        resultado: areaQuadrado,
        montagem: array
    }
    return objetoMontagem
}