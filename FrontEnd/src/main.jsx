import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';
import App from './App.jsx';
import './index.css';

const serverUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor
const socket = io(serverUrl);

const SensorData = () => {
    const [data, setData] = useState(null);
    const [data_2, setData_2] = useState(null);
    const [data_3, setData_3] = useState(null);
    const [data_4, setData_4] = useState(null);

    useEffect(() => {
        // No necesitas manejar la conexión y desconexión aquí.
        // Esto se manejará automáticamente por Socket.io

        // Escuchar eventos específicos
        socket.on('1/temperature', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData(receivedData); // Actualiza el estado con los datos recibidos
        });

        socket.on('1/aq', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData_2(receivedData); // Actualiza el estado con los datos recibidos
        });

        socket.on('1/humidity', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData_3(receivedData); // Actualiza el estado con los datos recibidos
        });

        socket.on('1/date', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData_4(receivedData); // Actualiza el estado con los datos recibidos
        });

        return () => {
            socket.off('1/datos'); // Desvincular el evento al desmontar el componente
        };
    }, []);

    return (
        <div>
            {data && (
                <div>
                    {/* Mostrar los datos en tu componente según sea necesario */}
                    <p>Temperatura: {data}</p>
                    <p>Air Quality: {data_2}</p>
                    <p>Humidity: {data_3}</p>
                    <p>Date: {data_4}</p>
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
