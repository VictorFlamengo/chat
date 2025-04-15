const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    
    console.log('Usuário conectado');

    socket.on('nova-mensagem', (dados) => {
      io.emit('mensagem-recebida', dados);
  });
    
    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    })

    socket.on('msg', (data) => {
        io.emit('showmsg', data);
        console.log(data);
    })


})

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
})

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});