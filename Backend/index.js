const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

// Creación del servidor Socket.io
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3001", // Reemplaza con la URL de tu frontend
        methods: ["GET", "POST"]
    }
});

// Manejo de conexiones entrantes con Socket.io
io.on('connection', (socket) => {
    console.log('Usuario conectado');

    const sensorId = 1;

    // Configuración de la conexión con el servidor externo
    const serverUrl = 'wss://airquality-production.up.railway.app';
    const originHeader = 'http://localhost:3000';
    const userId = '8e234a60-4b52-431a-8c33-98fac1bca3a9';
    const queryObject = {
        id: userId,
        moduleId: 1,
        sensorId: 1
    };

    // Creación del socket con configuración específica
    const externalSocket = io(serverUrl, {
        transportOptions: {
            websocket: {
                extraHeaders: {
                    Origin: originHeader
                }
            }
        },
        query: queryObject  // Aquí se pasa el queryObject al servidor externo
    });

    // Manejo de eventos del servidor externo y retransmisión a los clientes
    externalSocket.on(`${sensorId}/initialData`, (data) => {
        console.log('Data inicial:', data);
        io.emit(`${sensorId}/datos`, data); // Emitir datos a todos los clientes conectados
    });

    // Otros eventos y lógica aquí

    // Manejo de eventos de desconexión
    externalSocket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Inicio del servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});
