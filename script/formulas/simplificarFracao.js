export function simplificarFracao(fracao) {
    const numerador = parseInt(fracao.split('/')[0])
    const denominador = parseInt(fracao.split('/')[1])
    const array = []
    const maiorNumero = numerador > denominador ? numerador : denominador
    const arrayDeSimplificacao = []

    for (let i = maiorNumero; i > 1; i--) {
        arrayDeSimplificacao.push(i)
    }
    arrayDeSimplificacao.reverse()

    let i = 0
    let a = numerador
    let b = denominador
    const arrayFinal = [[a, b, 1]]
    while (i < arrayDeSimplificacao.length) {
        if (a % arrayDeSimplificacao[i] == 0 && b % arrayDeSimplificacao[i] == 0) {
            a = a / arrayDeSimplificacao[i]
            b = b / arrayDeSimplificacao[i]
            arrayFinal.push([a, b, arrayDeSimplificacao[i]])
        } else {
            i++
        }
    }

    if (arrayFinal.length <= 0) {
        arrayFinal.push([numerador, denominador])
    }

    const objetoMontagem = {
        resultado: arrayFinal[arrayFinal.length - 1],
        montagem: arrayFinal
    }

    return objetoMontagem
}