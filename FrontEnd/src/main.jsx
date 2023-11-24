import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';
import App from './App.jsx';
import './index.css';

const serverUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor
const socket = io(serverUrl);

const SensorData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Conectado al servidor WebSocket');
        });

        socket.on('disconnect', () => {
            console.log('Desconectado del servidor WebSocket');
        });

        socket.on('1/datos', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData(receivedData); // Actualiza el estado con los datos recibidos
        });

        return () => {
            socket.disconnect(); // Desconectar el socket al desmontar el componente
        };
    }, []);

    return (
        <div>
            {data && (
                <div>
                    {/* Mostrar los datos en tu componente según sea necesario */}
                    <p>Temperatura: {data.temperature}</p>
                    <p>Air Quality: {data.airQuality}</p>
                    {/* Otros campos de datos */}
                </div>
            )}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <SensorData />
    </React.StrictMode>
);
