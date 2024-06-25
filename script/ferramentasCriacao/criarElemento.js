export function criarElemento(tag, classe = '', conteudo = '', id = '', tipo = '') {
    const elemento = document.createElement(tag)
    if (classe) {
        elemento.classList.add(classe)
    }
    if (conteudo) {
        elemento.innerHTML = conteudo
    }
    if (id) {
        elemento.id = id
    }
    if (tipo) {
        elemento.type = tipo
    }
    return elemento
}