
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');


showRegister.addEventListener('click', e => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});

showLogin.addEventListener('click', e => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'flex';
});


function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}


registerForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = registerForm['register-email'].value.trim();
  const password = registerForm['register-password'].value;
  const passwordConfirm = registerForm['register-password-confirm'].value;

  if (!validarEmail(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (password.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  if (password !== passwordConfirm) {
    alert('As senhas não coincidem.');
    return;
  }

  
  if (localStorage.getItem(email)) {
    alert('Este email já está cadastrado.');
    return;
  }

  
  localStorage.setItem(email, JSON.stringify({ password }));

  alert('Cadastro realizado com sucesso! Agora faça login.');

  
  registerForm.reset();
  registerForm.style.display = 'none';
  loginForm.style.display = 'flex';
});


loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm['login-email'].value.trim();
  const password = loginForm['login-password'].value;

  if (!validarEmail(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  const userData = localStorage.getItem(email);

  if (!userData) {
    alert('Usuário não encontrado. Cadastre-se primeiro.');
    return;
  }

  const user = JSON.parse(userData);

  if (user.password !== password) {
    alert('Senha incorreta.');
    return;
  }

  alert('Login efetuado com sucesso!');

  
  window.location.href = 'home.html';
});
