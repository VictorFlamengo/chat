const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

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

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});