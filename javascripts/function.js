//const btnTheme = document.getElementById('boton');

const btnTheme = document.querySelector('#boton');
const body = document.body;

btnTheme.addEventListener(
    'click', () => {
        //btnTheme.addEventListener('click', () => {
        body.classList.toggle('cambiar_color');

        if (body.classList.contains('cambiar_color')) {
            btnTheme.textContent = 'Modo Oscuro';
        } else {
            btnTheme.textContent = 'Modo Claro';
        }
        console.log('Botón de tema Oscuro: ');
        body.classList.contains('cambiar_color');
    }
);
