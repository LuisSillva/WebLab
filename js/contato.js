/* CONTATO.JS — formulario pro trabalho */

document.addEventListener('DOMContentLoaded', () => {
    const formContato = document.getElementById('form-contato');

    // submit evento qnd o usuário clica em enviar
    formContato.addEventListener('submit', (event) => {
        event.preventDefault();

        // alert exigido no pdf
        alert('Página em construção');

        formContato.reset();
    });
});