export function calcularEquacaoSegundoGrau(expressaoString) {
    const array = []
    const objetoFatores = indentificarFatores(expressaoString)

    const formula = `Δ = b² - 4 * a * c`
    const linha1 = `Δ = (${objetoFatores.b})² - 4 * ${objetoFatores.a} * ${objetoFatores.c}`
    const linha2Parte1 = Math.pow(parseInt(objetoFatores.b), 2)
    const linha2Parte2 = -4 * parseInt(objetoFatores.a) * parseInt(objetoFatores.c)
    const sinal = Math.sign(linha2Parte2) == -1 ? '' : '+'
    const linha2 = `Δ = ${linha2Parte1}${sinal}${linha2Parte2}`

    let resultadoLinha3

    if (sinal === '+') {
        resultadoLinha3 = linha2Parte1 + linha2Parte2
    }
    if (sinal === '') {
        resultadoLinha3 = linha2Parte2 + linha2Parte1

    }
    const linha3 = `Δ = ${resultadoLinha3}`

    array.push(formula)
    array.push(linha1)
    array.push(linha2)
    array.push(linha3)

    const delta = resultadoLinha3

    const formulaX = `x = -(b) ± √Δ / 2 * a`
    // x1
    const x1Linha1 = `x1 = -(${objetoFatores.b}) + √${delta} / 2*${objetoFatores.a}`
    const sinalB = Math.sign(objetoFatores.b)
    let bFormatado

    if (sinalB == '-1') {
        console.log('vai ser mais')
        bFormatado = objetoFatores.b * -1
    } else {
        console.log('vai ser menos')
        bFormatado = objetoFatores.b
    }
    const x1Linha2 = `x1 = ${bFormatado} + ${Math.sqrt(delta)} / ${2 * objetoFatores.a}`
    const x1Linha3 = `x1 = ${bFormatado + Math.sqrt(delta)} / ${2 * objetoFatores.a}`
    const x1Linha4 = `x1 = ${(bFormatado + Math.sqrt(delta)) / (2 * objetoFatores.a)}`
    
    // x2
    const x2Linha1 = `x2 = -(${objetoFatores.b}) - √${delta} / 2*${objetoFatores.a}`
    const x2Linha2 = `x2 = ${bFormatado} - ${Math.sqrt(delta)} / ${2 * objetoFatores.a}`
    const x2Linha3 = `x3 = ${bFormatado - Math.sqrt(delta)} / ${2 * objetoFatores.a}`
    const x2Linha4 = `x4 = ${(bFormatado - Math.sqrt(delta)) / (2 * objetoFatores.a)}`

    array.push(formulaX)
    array.push(x1Linha1)
    array.push(x1Linha2)
    array.push(x1Linha3)
    array.push(x1Linha4)
    array.push(x2Linha1)
    array.push(x2Linha2)
    array.push(x2Linha3)
    array.push(x2Linha4)

    const objetoMontagem = {
        resultado: {
            delta: delta,
            x1: (bFormatado + Math.sqrt(delta)) / (2 * objetoFatores.a),
            x2: (bFormatado - Math.sqrt(delta)) / (2 * objetoFatores.a),
        }, 
        montagem: array
    }
    return objetoMontagem
}

function indentificarFatores(expressaoString) {
    const expressaoFormatada = expressaoString.trim()
    const a = expressaoFormatada.match(/(\+|-)?\d+x(2)/g)
    const b = expressaoFormatada.match(/(\+|-)?\d+x(\+|-)/g)[0].split('')
    b.splice(b.length - 1, 1)
    const bFormatado = b.join('')
    const c = expressaoFormatada.match(/(\+|-)\d+/g)
    const cFormatado = c[c.length - 1]
    const aFormatado = a[0].match(/((-|\+)?\d+x)/g)[0].split('')
    aFormatado.pop()

    return {
        a: aFormatado.join(''),
        b: bFormatado.match(/(-|\+)\d+/g)[0],
        c: cFormatado
    }
}