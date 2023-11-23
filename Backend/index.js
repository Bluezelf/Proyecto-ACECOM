const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

// Se sirve el contenido estático desde la carpeta public
//app.use(express.static(path.join(__dirname, 'public')));

// Creación del servidor Socket.io
const io = socketIO(server, {
    cors: {
        origin: "wss://airquality-production.up.railway.app",
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
        io.emit(`${sensorId}/datos`, data);
    });

    externalSocket.on(`${sensorId}/initialData`, (data) => {
        console.log('Data inicial:', data);
        io.emit(`${sensorId}/datos`, data);
    });

    externalSocket.on(`${sensorId}/aq`, (data) => {
        console.log('Air Quality:', data);
        io.emit(`${sensorId}/datos`, { airQuality: data });
    });

    externalSocket.on(`${sensorId}/temperature`, (data) => {
        console.log('Temperatura (C°):', data);
        io.emit(`${sensorId}/datos`, { temperature: data });
    });

    externalSocket.on(`${sensorId}/h2s`, (data) => {
        console.log('Sulfuro de Hidrogeno:', data);
        io.emit(`${sensorId}/datos`, { h2s: data });
    });

    externalSocket.on(`${sensorId}/humidity`, (data) => {
        console.log('Humedad (%):', data);
        io.emit(`${sensorId}/datos`, { humidity: data });
    });

    externalSocket.on(`${sensorId}/date`, (data) => {
        console.log('Fecha y Hora actual:', data);
        io.emit(`${sensorId}/datos`, { date: data });
    });

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
