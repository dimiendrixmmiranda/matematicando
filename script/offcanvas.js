const btnBars = document.querySelector('#btnBars')
const elementoOffcanvas = document.querySelector('#offcanvas')
const btnFecharOffcanvas = document.querySelector('#fecharOffcanvas')

btnBars.addEventListener('click', (e) => {
    e.preventDefault()
    if (!btnBars.classList.contains('active')) {
        btnBars.classList.add('active')
        elementoOffcanvas.setAttribute('style', 'animation: abrirOffcanvas .6s ease; left: 21%')
    }
})

btnFecharOffcanvas.addEventListener('click', (e) => {
    e.preventDefault()
    elementoOffcanvas.setAttribute('style', 'animation: fecharOffcanvas .6s ease; left: 101%')
    btnBars.classList.remove('active')
})