var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/../epileptic-frontend/'));
server.listen(7000,"0.0.0.0");

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    var data = {
        color: "#FFCC00",
        duration: 100,
        interval: 500
    };

    socket.emit('data', data);
    
    // socket.on('my other event', function (data) {
    //     console.log(data);
    // });
});

