function mostrarNotificacao(texto = 'Nova mensagem recebida!') {
    const box = document.getElementById('notificacao');
    box.textContent = texto;  // Coloca o texto na notificação
    box.style.display = 'block';  // Mostra a notificação

    setTimeout(() => {
        box.style.display = 'none';  // Esconde após 3 segundos
    }, 3000);  // Tempo de duração da notificação
}