const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const message = document.getElementById('message');

// Define as palavras-chave e as páginas correspondentes
const pages = {
  'curso': 'cursos.html',
  'avaliar': 'feedback.html',
  'cadastro': 'login.html',
  'login': 'login.html',
  '': 'pagina-manga.html',
  '': 'pagina-uva.html',
  '': 'pagina-morango.html'
};

function searchAndRedirect() {
  const query = searchInput.value.trim().toLowerCase();
  message.textContent = '';

  if (!query) {
    message.textContent = 'Por favor, digite uma palavra-chave.';
    return;
  }

  if (pages[query]) {

    window.location.href = pages[query];
  } else {
    message.textContent = 'Nenhuma página encontrada para essa palavra-chave.';
  }
}


searchBtn.addEventListener('click', searchAndRedirect);


searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchAndRedirect();
  }
});
