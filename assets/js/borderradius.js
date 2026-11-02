const box = document.querySelector('.box');
const input = document.querySelector('input');
const copyButton = document.querySelector('.copy-button');

const changeBorderRadius = () => {
    let valueInput = input.value + 'px';
    box.style.borderRadius = valueInput;
}

input.addEventListener('input', changeBorderRadius);

copyButton.addEventListener('click', () => {
    const css = `.box { border-radius: ${input.value}px; }`;

    navigator.clipboard.writeText(css).then(() => {
        copyButton.textContent = 'CSS copiado!';
        setTimeout(() => copyButton.textContent = 'Copiar CSS', 1500);
    });
});