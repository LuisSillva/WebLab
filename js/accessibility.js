// ACCESSIBILITY.JS — Alterna tamanho da fonte

function toggleFontSize() {
  document.body.classList.toggle('font-large');
}

document.getElementById('btn-accessibility').addEventListener('click', toggleFontSize);