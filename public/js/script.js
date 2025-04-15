const socket = io();  // Conecta ao servidor WebSocket

function enviar() {
    const msg = document.getElementById('msg').value;
    const user = document.getElementById('user').value;

    if (msg.trim() !== '' && user.trim() !== '') {
        socket.emit('nova-mensagem', { user, msg });  // Envia a mensagem para o servidor
        document.getElementById('msg').value = '';  // Limpa o campo de mensagem
    }
}

socket.on('mensagem-recebida', (dados) => {
    const chat = document.getElementById('chat');
    const div = document.createElement('div');
    div.innerHTML = `<strong>${dados.user}:</strong> ${dados.msg}`;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;  // Rola o chat para a última mensagem

    // Exibe a notificação quando a mensagem for recebida
    mostrarNotificacao(`Mensagem de ${dados.user}`);
});