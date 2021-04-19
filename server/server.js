var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=> {
      //connecting sockets
      socket.on('canvas-data', (data)=> {
            //when canvas data recieves it will send to all users
            socket.broadcast.emit('canvas-data', data);
            
      });
      socket.on('msg-sent',(data)=>{
            //when message will be sent it will send to all user
            socket.broadcast.emit('msg-recieve',data);
      });
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})