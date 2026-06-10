// THEME.JS — Alterna entre dark e light theme

function toggleTheme() {
  document.body.classList.toggle('dark'); // adiciona a classe dark no body se já não existir, remove se existir

  var icon = document.getElementById('theme-icon');

  if (document.body.classList.contains('dark')) {
    icon.textContent = 'light_mode'; // muda o icone de acordo com o tema
  } else {
    icon.textContent = 'dark_mode';
  }
}

document.getElementById('btn-theme').addEventListener('click', toggleTheme);  // no clique do botao com o id btn-theme, chama a funcao toggleTheme