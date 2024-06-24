export function mmc(expressaoString) {
    const arrayDeNumeros = expressaoString.split('-').map(numero => parseInt(numero))
    let arrayDeInformacoes
    switch (arrayDeNumeros.length) {
        case 2:
            {
                var a = arrayDeNumeros[0]
                var b = arrayDeNumeros[1]
                const maiorValor = a > b ? a : b
                const listaDeNumerosPrimos = gerarNumerosPrimos(maiorValor)

                let numeroA = a
                let numeroB = b
                arrayDeInformacoes = [{ n1: numeroA, n2: numeroB, divisor: 1 }]
                let i = 0

                while (numeroA > 1 || numeroB > 1) {
                    if (numeroA % listaDeNumerosPrimos[i] === 0 && numeroB % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA / listaDeNumerosPrimos[i]
                        numeroB = numeroB / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroA % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({ n1: numeroA, n2: numeroB, divisor: listaDeNumerosPrimos[i] })
                    } else if (numeroB % listaDeNumerosPrimos[i] === 0) {
                        numeroB = numeroB / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({ n1: numeroA, n2: numeroB, divisor: listaDeNumerosPrimos[i] })
                    } else {
                        i++
                    }
                }
            }
            break;
        case 3:
            {
                var a = arrayDeNumeros[0]
                var b = arrayDeNumeros[1]
                var c = arrayDeNumeros[2]
                const maiorValor = identificarMaiorValor([arrayDeNumeros[0], arrayDeNumeros[1], arrayDeNumeros[2]])
                const listaDeNumerosPrimos = gerarNumerosPrimos(maiorValor)

                let numeroA = a
                let numeroB = b
                let numeroC = c
                arrayDeInformacoes = [{ n1: numeroA, n2: numeroB, n3: numeroC, divisor: 1 }]
                let i = 0
                while (numeroA > 1 || numeroB > 1 || numeroC > 1) {
                    if (numeroA % listaDeNumerosPrimos[i] === 0 && numeroB % listaDeNumerosPrimos[i] === 0 && numeroC % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA / listaDeNumerosPrimos[i]
                        numeroB = numeroB / listaDeNumerosPrimos[i]
                        numeroC = numeroC / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroA % listaDeNumerosPrimos[i] === 0 && numeroB % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA / listaDeNumerosPrimos[i]
                        numeroB = numeroB / listaDeNumerosPrimos[i]
                        numeroC = numeroC
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroA % listaDeNumerosPrimos[i] === 0 && numeroC % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA / listaDeNumerosPrimos[i]
                        numeroB = numeroB
                        numeroC = numeroC / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroB % listaDeNumerosPrimos[i] === 0 && numeroC % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA
                        numeroB = numeroB / listaDeNumerosPrimos[i]
                        numeroC = numeroC / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroA % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA / listaDeNumerosPrimos[i]
                        numeroB = numeroB
                        numeroC = numeroC
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroB % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA
                        numeroB = numeroB / listaDeNumerosPrimos[i]
                        numeroC = numeroC
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    } else if (numeroC % listaDeNumerosPrimos[i] === 0) {
                        numeroA = numeroA
                        numeroB = numeroB
                        numeroC = numeroC / listaDeNumerosPrimos[i]
                        arrayDeInformacoes.push({
                            n1: numeroA,
                            n2: numeroB,
                            n3: numeroC,
                            divisor: listaDeNumerosPrimos[i]
                        })
                    }
                    else {
                        i++
                    }
                }
            }
            break;
        default:
            break;
    }

    const minimoMultiploComum = arrayDeInformacoes.map(item => (item.divisor)).reduce((a, b) => a * b)
    const objetoMontagem = {
        resultado: minimoMultiploComum,
        montagem: arrayDeInformacoes
    }
    return objetoMontagem
}

function identificarMaiorValor(array) {
    let maiorValor = array[0]

    for (let i = 0; i < array.length; i++) {
        if (maiorValor < array[i]) {
            maiorValor = array[i]
        }
    }
    return maiorValor
}

function gerarNumerosPrimos(num) {
    const arrayNumerosPrimos = []
    for (let i = num; i > 0; i--) {
        if (verificarSeUmNúmeroEPrimo(i)) {
            arrayNumerosPrimos.push(i)
        }
    }
    return arrayNumerosPrimos.reverse()
}


function verificarSeUmNúmeroEPrimo(num) {
    const arrayDeNumerosDivisiveis = []
    let current = 0 // quantidades de vezes que o numero passado como parametro é divisivel
    
    for (let i = num; i > 0; i--) {
        arrayDeNumerosDivisiveis.push(num % i == 0)
    }

    arrayDeNumerosDivisiveis.forEach(valor => {
        if (valor == true) current++
    })

    if (current == 2) {
        return true
    } else {
        return false
    }
}