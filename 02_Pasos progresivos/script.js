const circulos = document.querySelectorAll('.circulos');
const pre = document.getElementById('pre');
const nex = document.getElementById('nex');
const barra = document.getElementById('barra');

let posicion = 1;
let progreso = barra.style.width;

//console.log(progreso)

function actualizar(v) {

    if (v == 1) {

        switch (posicion) {
            case 1:
                barra.style.width = '33%';
                pre.style.cursor = 'pointer';
                circulos[1].classList.add('activa');
                posicion++;
                break;
            case 2:
                barra.style.width = '66%'
                pre.style.cursor = 'pointer';
                circulos[2].classList.add('activa');
                posicion++;
                break;
            case 3:
                barra.style.width = '99%'
                circulos[3].classList.add('activa');
                posicion++;
                nex.style.cursor = 'not-allowed'
                break;
        }
    } else {

        switch (posicion) {
            case 2:
                barra.style.width = '0%';
                pre.style.cursor = 'not-allowed';
                circulos[1].classList.remove('activa');
                posicion--;
                break;
            case 3:
                barra.style.width = '33%';
                pre.style.cursor = 'pointer';
                nex.style.cursor = 'pointer';
                circulos[2].classList.remove('activa');
                posicion--;
                break;
            case 4:
                barra.style.width = '66%';
                circulos[3].classList.remove('activa');
                posicion--;
                nex.style.cursor = 'pointer';
                break;
        }
    }

}