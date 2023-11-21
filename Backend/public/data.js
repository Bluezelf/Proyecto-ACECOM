// En data.js, maneja la conexión WebSocket y eventos en el lado del cliente
const serverUrl = 'wss://airquality-production.up.railway.app';
const originHeader = 'http://localhost:3000';
const userId = '8e234a60-4b52-431a-8c33-98fac1bca3a9';
const queryObject = {
    id: userId,
    moduleId: 1,
    sensorId: 1
};

const socketIoScript = document.createElement('script');
socketIoScript.src = '/socket.io/socket.io.js';
document.body.appendChild(socketIoScript);

socketIoScript.onload = () => {
    const socket = io(serverUrl, {
        transportOptions: {
            websocket: {
                extraHeaders: {
                    Origin: originHeader
                }
            }
        }
    });

const sensorId = 1;

    socket.on('connect', () => {
        console.log('Conectado al servidor WebSocket');
    });

    socket.on(`${sensorId}/initialData`, (data) => {
        console.log('Data inicial":', data);
    });

    socket.on(`${sensorId}/aq`, (data) => {
        console.log('Air Quality:', data);
    });

    socket.on(`${sensorId}/temperature`, (data) => {
        console.log('Temperatura (C°):', data);
    });

    socket.on(`${sensorId}/h2s`, (data) => {
        console.log('Sulfuro de Hidrogeno":', data);
    });

    // socket.on(`${sensorId}/h2s`, (data) => {
    //     try {
    //         console.log('Sulfuro de Hidrogeno:', data);
    //     } catch (error) {
    //         console.error('Error en /h2s:', error);
    //     }
    // });

    socket.on(`${sensorId}/humidity`, (data) => {
        console.log('Humedad (%):', data);
    });

    socket.on(`${sensorId}/date`, (data) => {
        console.log('Fecha y Hora actual:', data);
    });

    socket.on('error', (error) => {
        console.error('Error de conexión:', error);
    });

    socket.on('disconnect', () => {
        console.log('Desconectado del servidor');
    });
};
