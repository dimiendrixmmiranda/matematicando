import { dividirFracao } from "./dividirFracao.js"
import { multiplicarFracao } from "./multiplicarFracao.js"
import { somarFracoes } from "./somarFracao.js"
import { subtrairFracoes } from "./subtrairFracao.js"

export function operacaoComFracao(expressaoString) {
    const fracao1 = expressaoString.match(/(\d+)\/(\d+)/g)[0]
    const fracao2 = expressaoString.match(/(\d+)\/(\d+)/g)[1]
    const sinal = expressaoString.split(/\d+\/\d+/g).filter(elemento => elemento)[0]
    let resultado

    switch (sinal) {
        case '+':
            resultado = somarFracoes(expressaoString)
            break;
        case '-':
            resultado = subtrairFracoes(expressaoString)
            break;
        case '*':
            resultado = multiplicarFracao(expressaoString)
            break;
        case '/':
            resultado = dividirFracao(expressaoString)
            break;
        default:
            break;
    }
    return resultado
}