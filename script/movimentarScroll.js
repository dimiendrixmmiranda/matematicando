const btnDireito = document.querySelector('#movimentarScrollDireita')
const btnEsquerdo = document.querySelector('#movimentarScrollEsquerda')
const listaFerramentas = document.querySelector('.conteudo-resolucao-direta ul')

let variavel = 0

btnDireito.addEventListener('click', (e) => {
    e.preventDefault()
    const tamanhoDoScroll = listaFerramentas.scrollWidth 
    if (variavel >= 0 && variavel <= tamanhoDoScroll) {
        variavel += 100
        listaFerramentas.scroll({
            top: 100,
            left: variavel,
            behavior: "smooth",
        })
    }
})
btnEsquerdo.addEventListener('click', (e) => {
    e.preventDefault()
    const tamanhoDoScroll = listaFerramentas.scrollWidth 
    if (variavel > 0 && variavel <= tamanhoDoScroll) {
        variavel -= 100
        console.log(variavel)
        listaFerramentas.scroll({
            top: 100,
            left: variavel,
            behavior: "smooth",
        })
    }
})