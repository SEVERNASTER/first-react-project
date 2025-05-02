import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import './Toast.css';

function Toast({ icon, text }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Activar animación de entrada
        const timer1 = setTimeout(() => setShow(true), 50);

        // Ocultar después de cierto tiempo
        const timer2 = setTimeout(() => setShow(false), 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const iconMap = {
        succes: { icon: <FiCheckCircle />, color: '#10A37F' },
        alert: { icon: <FiAlertTriangle />, color: '#fe8d59' },
        error: { icon: <CgCloseO />, color: '#ee4b4b' }
    };

    const iconToRender = iconMap[icon] || {
        icon: <FiAlertTriangle />,
        color: '#fe8d59'
    };

    return (
        <div
            className={`toast-container ${show ? 'show' : 'hide'}`}
            style={{ '--toastBgColor': iconToRender.color }}
        >
            {iconToRender.icon}
            <p>{text || 'No se pudo cargar el mensaje'}</p>
        </div>
    );
}

export default Toast;
