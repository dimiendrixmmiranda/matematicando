export function calcularPitagoras(expressaoString) {
    const array = []
    const hipotenusa = expressaoString.split('=')[0]
    const cateto1 = expressaoString.split('=')[1].split('+')[0]
    const cateto2 = expressaoString.split('=')[1].split('+')[1]
    const elementos = [hipotenusa, cateto1, cateto2]
    
    const indiceIncognita = elementos.findIndex(numero => numero.includes('h') || numero.includes('c'))
    const incognita = elementos[indiceIncognita]
    const formula = `h² = c1² + c2²`
    let valorIncognita
    let valorFinal
    let linha1
    let linha2
    let linha3
    let linha4
    let linha5
    let linha6

    if (incognita == 'h-2') {
        // Hipotenusa
        const cateto1Quadrado = Math.pow(cateto1.split('-')[0], cateto1.split('-')[1])
        const cateto2Quadrado = Math.pow(cateto2.split('-')[0], cateto2.split('-')[1])
        valorIncognita = Math.sqrt(parseInt(cateto1Quadrado) + parseInt(cateto2Quadrado))

        linha1 = `h² = ${cateto1.split('-')[0]}² + ${cateto2.split('-')[0]}²`
        linha2 = `h² = ${cateto1Quadrado} + ${cateto2Quadrado}`
        linha3 = `h² = ${cateto1Quadrado + cateto2Quadrado}`
        linha4 = `h = √${cateto1Quadrado + cateto2Quadrado}`
        linha5 = `h = ${valorIncognita}`
        valorFinal = valorIncognita
    } else if (incognita == 'c-2') {
        if (indiceIncognita == '1') {
            console.log('cateto 1 é a incognita')
            const hipotenusaQuadrado = Math.pow(hipotenusa.split('-')[0], 2)
            const cateto2Quadrado = Math.pow(cateto2.split('-')[0], 2)
            
            if (Math.sign(hipotenusaQuadrado - cateto2Quadrado) == '-1') {
                valorIncognita = (hipotenusaQuadrado - cateto2Quadrado) * -1
            } else {
                valorIncognita = hipotenusaQuadrado - cateto2Quadrado
            }

            linha1 = `${hipotenusa.split('-')[0]}² = c² + ${cateto2.split('-')[0]}²`
            linha2 = `${hipotenusa.split('-')[0]}² - ${cateto2.split('-')[0]}² = c²`
            linha3 = `${hipotenusaQuadrado} - ${cateto2Quadrado} = c²`
            linha4 = `c² = ${valorIncognita}`
            linha5 = `c = √${valorIncognita}`
            linha6 = `c = ${Math.sqrt(valorIncognita)}`
            valorFinal = Math.sqrt(valorIncognita)
        } else if (indiceIncognita == '2') {
            console.log('cateto 2 é a incognita')
            const hipotenusaQuadrado = Math.pow(hipotenusa.split('-')[0], 2)
            const cateto1Quadrado = Math.pow(cateto1.split('-')[0], 2)
            
            if (Math.sign(hipotenusaQuadrado - cateto1Quadrado) == '-1') {
                valorIncognita = (hipotenusaQuadrado - cateto1Quadrado) * -1
            } else {
                valorIncognita = hipotenusaQuadrado - cateto1Quadrado
            }
            linha1 = `${hipotenusa.split('-')[0]}² = c² + ${cateto1.split('-')[0]}²`
            linha2 = `${hipotenusa.split('-')[0]}² - ${cateto1.split('-')[0]}² = c²`
            linha3 = `${hipotenusaQuadrado} - ${cateto1Quadrado} = c²`
            linha4 = `c² = ${valorIncognita}`
            linha5 = `c = √${valorIncognita}`
            linha6 = `c = ${Math.sqrt(valorIncognita)}`
            valorFinal = Math.sqrt(valorIncognita)
        }
    }

    array.push(formula)
    array.push(linha1)
    array.push(linha2)
    array.push(linha3)
    array.push(linha4)
    array.push(linha5)
    linha6 != undefined ? array.push(linha6) : '';

    const objetoMontagem = {
        resultado: valorFinal,
        montagem: array
    }

    return objetoMontagem
}