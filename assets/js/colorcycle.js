// ---------- Elementos ----------
const colorBox = document.getElementById("colorBox");
const toggleButton = document.getElementById("toggleButton");
const warning = document.getElementById("warning");

const hexInputs = [
  document.getElementById("red"),
  document.getElementById("green"),
  document.getElementById("blue"),
];
const incInputs = [
  document.getElementById("incRed"),
  document.getElementById("incGreen"),
  document.getElementById("incBlue"),
];
const intervalInput = document.getElementById("interval");

const allInputs = [...hexInputs, ...incInputs, intervalInput];

let intervalId = null;
let cores = [0, 0, 0]; 
let incrementos = [0, 0, 0];

const HEX_REGEX = /^[0-9a-f]{2}$/i;

function validar() {
  const nomes = ["R", "G", "B"];

  for (let i = 0; i < 3; i++) {
    if (!HEX_REGEX.test(hexInputs[i].value.trim())) {
      return `Cor ${nomes[i]}: use 2 dígitos hexadecimais (0-9 e A-F).`;
    }
    const inc = Number(incInputs[i].value);
    if (incInputs[i].value.trim() === "" || !Number.isInteger(inc)) {
      return `Incremento ${nomes[i]}: use um número inteiro.`;
    }
  }

  if (Number(intervalInput.value) < 50) {
    return "Intervalo: use no mínimo 50 ms.";
  }
  return null;
}

function mostrarAviso(mensagem) {
  warning.textContent = mensagem;
  warning.hidden = false;
}

function esconderAviso() {
  warning.hidden = true;
}

function desenhar() {
  const [r, g, b] = cores;
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function proximoPasso() {
  cores = cores.map((valor, i) => (((valor + incrementos[i]) % 256) + 256) % 256);
  desenhar();
}

function travarCampos(travar) {
  allInputs.forEach((input) => (input.disabled = travar));
}

function start() {
  const erro = validar();
  if (erro) {
    mostrarAviso(erro);
    return;
  }
  esconderAviso();

  cores = hexInputs.map((input) => parseInt(input.value, 16));
  incrementos = incInputs.map((input) => Number(input.value));

  desenhar();
  intervalId = setInterval(proximoPasso, Number(intervalInput.value));

  travarCampos(true);
  toggleButton.textContent = "Stop";
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;

  travarCampos(false);
  toggleButton.textContent = "Start";
}

toggleButton.addEventListener("click", () => {
  if (intervalId === null) {
    start();
  } else {
    stop();
  }
});