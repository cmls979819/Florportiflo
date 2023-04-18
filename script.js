// Obter o botão "Mostrar detalhes"
var btnDetalhes = document.getElementById("mostrar-detalhes");

// Obter a lista de detalhes das habilidades
var detalhesHabilidades = document.getElementById("detalhes-habilidades");

// Adicionar um ouvinte de eventos de clique ao botão
btnDetalhes.addEventListener("click", function() {
  // Verificar se a lista de detalhes está oculta
  if (detalhesHabilidades.style.display === "none") {
    // Mostrar a lista de detalhes
    detalhesHabilidades.style.display = "block";
    // Alterar o texto do botão para "Ocultar detalhes"
    btnDetalhes.textContent = "Ocultar detalhes";
  } else {
    // Ocultar a lista de detalhes
    detalhesHabilidades.style.display = "none";
    // Alterar o texto do botão para "Mostrar detalhes"
    btnDetalhes.textContent = "Mostrar detalhes";
  }
});

