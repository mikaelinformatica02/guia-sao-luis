// Funcionalidade 1: Modo Escuro
const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");
  
  if (document.body.classList.contains("escuro")) {
    botaoTema.textContent = "Modo claro";
  } else {
    botaoTema.textContent = "Modo escuro";
  }
});

// Funcionalidade 2: Curtir os Pontos Turísticos
const botoesCurtir = document.querySelectorAll(".btn-curtir");

botoesCurtir.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const contador = botao.parentElement.querySelector(".contador-curtidas");
    let numeroAtual = parseInt(contador.textContent);
    contador.textContent = numeroAtual + 1;
  });
});

// Funcionalidade 3: Validação do Formulário
const formContato = document.querySelector("#form-contato");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputMensagem = document.querySelector("#mensagem");
const mensagemFeedback = document.querySelector("#mensagem-feedback");

formContato.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  const nomeVal = inputNome.value.trim();
  const emailVal = inputEmail.value.trim();
  const mensagemVal = inputMensagem.value.trim();

  // Verificação de campos vazios
  if (nomeVal === "" || emailVal === "" || mensagemVal === "") {
    mensagemFeedback.style.color = "red";
    mensagemFeedback.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  // Verificação se o e-mail contém '@'
  if (!emailVal.includes("@")) {
    mensagemFeedback.style.color = "red";
    mensagemFeedback.textContent = "Por favor, insira um e-mail válido (deve conter '@').";
    return;
  }

  // Verificação de no mínimo 10 caracteres na mensagem
  if (mensagemVal.length < 10) {
    mensagemFeedback.style.color = "red";
    mensagemFeedback.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
    return;
  }

  // Se tudo estiver correto
  mensagemFeedback.style.color = "green";
  mensagemFeedback.textContent = `Obrigado, ${nomeVal}! Mensagem enviada.`;

  // Limpa os campos do formulário
  formContato.reset();
});

const btnTopo = document.getElementById("btnTopo");

btnTopo.addEventListener("click", function()  {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});