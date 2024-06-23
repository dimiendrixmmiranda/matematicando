export function calcularDesconto(expressaoString){
    const array = []
    const expressaoFormatada = expressaoString.split('-')
    expressaoFormatada.map(numero => {
        if(numero.includes('%')){
            expressaoFormatada[1] = numero.split('%')[0]
        }
    })
    const numerosConvertidos = expressaoFormatada.map(numero => parseFloat(numero))
    
    const desconto = (numerosConvertidos[1] / 100) * numerosConvertidos[0]
    const descontoEmCimaDoPreco = numerosConvertidos[0] - desconto
    
    console.log(descontoEmCimaDoPreco)
    const formula = `Desconto = (Desconto passado / 100) * Valor total`
    const linha1 = `Desconto = (${numerosConvertidos[1]} / 100) * ${numerosConvertidos[0]}`
    const linha2 = `Desconto = ${desconto}`
    const linha3 = `Desconto em cima do valor = ${numerosConvertidos[0]} - ${desconto}`
    const linha4 = `Desconto em cima do valor = ${numerosConvertidos[0] - desconto}`
    array.push(formula)
    array.push(linha1)
    array.push(linha2)
    array.push(linha3)
    array.push(linha4)

    const objetoMontagem = {
        resultado: desconto,
        montagem: array
    }
    
    return objetoMontagem
}