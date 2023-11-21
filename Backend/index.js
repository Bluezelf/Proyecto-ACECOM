const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

const io = require("socket.io")(server, {
    cors: {
        origin: "wss://airquality-production.up.railway.app",
        methods: ["GET", "POST"]
    }
});
