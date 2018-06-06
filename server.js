const express = require('express');
const socket = require('socket.io');

const app = express();
app.set('view engine', 'ejs');
const server = require('http').Server(app);

const io = socket(server);

const userList = [];

app.get('/', function (req, res) {

    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/user', (req, res) => {
    res.render('user');
})

app.get('edit', (req, res) => {
    res.render('edit');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


io.on('connection', (socket) => {
    socketid = socket.id;
    socket.on("login", (obj) => {
        //socketHander.storeMessages(obj);
        console.log('login');
        io.to(socketid).emit("login", 'test');
    });
});