document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector('form');
    const inputBinario = document.getElementById('binario');
    const spanResultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const binario = inputBinario.value;

        const decimal = parseInt(binario, 2);

        spanResultado.textContent = decimal;
    });
});