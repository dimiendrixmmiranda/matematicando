const limparResultadoDireto = document.querySelector('#limparResultadoDireto')
limparResultadoDireto.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('#resultadoDireto>div').forEach(item => item.remove())
})