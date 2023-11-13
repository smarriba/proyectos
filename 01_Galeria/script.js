const panels = document.querySelectorAll('.imagen')

panels.forEach(imagen => {
    imagen.addEventListener('click', () => {
        removeActiveClasses();
        imagen.classList.add('activa');
    });
});

function removeActiveClasses() {
    panels.forEach(imagen => {
        imagen.classList.remove('activa');
    });
}

