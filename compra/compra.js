const form = document.getElementById('purchaseForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const payment = form.payment.value;

  if (!name || !email || !payment) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Obrigado pela compra, ${name}! Um email de confirmação foi enviado para ${email}.`);

  form.reset();
});
