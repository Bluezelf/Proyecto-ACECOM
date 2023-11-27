import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';
import App from './App.jsx';
import './index.css';

const serverUrl = 'http://localhost:3000';
const socket = io(serverUrl);

const SensorData = () => {
    const [data, setData] = useState(null);
    const [data_2, setData_2] = useState(null);
    const [data_3, setData_3] = useState(null);
    const [data_4, setData_4] = useState(null);

    useEffect(() => {
        socket.on('1/temperature', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData(receivedData);
        });

        socket.on('1/aq', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData_2(receivedData);
        });

        socket.on('1/humidity', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData_3(receivedData);
        });

        socket.on('1/date', (receivedData) => {
            console.log('Datos recibidos:', receivedData);
            setData_4(receivedData);
        });

        return () => {
            socket.off('1/datos');
        };
    }, []);

    return (
        <div>
            {data && (
                <div>
                    {/* XXXXXXXXXXXX */}
                    <p>Temperatura: {data}</p>
                    <p>Air Quality: {data_2}</p>
                    <p>Humidity: {data_3}</p>
                    <p>Date: {data_4}</p>
                    {/* XXXXXXXXXXXXXXXX */}
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

