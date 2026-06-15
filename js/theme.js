// THEME.JS — Alterna entre dark e light theme

// Ao carregar a página, verifica se já tem um tema salvo
if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');  // adiciona a classe dark no body se já não existir, remove se existir
  document.getElementById('theme-icon').textContent = 'light_mode'; 
}

function toggleTheme() {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('tema', 'dark');
    document.getElementById('theme-icon').textContent = 'light_mode';
  } else {                                      // muda o icone de acordo com o tema
    localStorage.setItem('tema', 'light');
    document.getElementById('theme-icon').textContent = 'dark_mode';
  }
}

document.getElementById('btn-theme').addEventListener('click', toggleTheme); // no clique do botao com o id btn-theme, chama a funcao toggleTheme