const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// 추가
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');


const PORT = process.env.PORT || 5000;

const router = require('./router');

//1:05:59 

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) =>{
    console.log('We have a new connection!!! ');


    socket.on('join',({name,room},callback) => {
        console.log(name,room);
          
        callback(); //error handling
    })


    //Real time 
    socket.on('disconnect',() => {
        console.log('User had left!!! ');

    })


});


//middleware
app.use(router);



server.listen(PORT, ()=> console.log('server has started on port ${PORT}'));

