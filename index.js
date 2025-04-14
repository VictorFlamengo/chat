const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    
    console.log('user connected');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })

    socket.on('msg', (data) => {
        io.emit('showmsg', data);
        console.log(data);
    })


})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

http.listen(3000, () => {
  console.log('listening on *:3000');
})