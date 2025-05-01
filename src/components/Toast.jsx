import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import './Toast.css'

function Toast({ icon, text }) {
    const succesIcon = <FiCheckCircle />
    const alertIcon = <FiAlertTriangle />
    const errorIcon = <CgCloseO />
    let iconToRender = {}

    switch (icon) {
        case 'succes':
            iconToRender = {
                icon: succesIcon,
                color: '#10A37F',
                text
            }
            break;
        case 'alert':
            iconToRender = {
                icon: alertIcon,
                color: '#fe8d59',
                text
            }
            break;
        case 'error':
            iconToRender = {
                icon: errorIcon,
                color: '#ee4b4b',
                text
            }
            break;
        default:
            iconToRender = {
                icon: alertIcon,
                color: '#fe8d59',
                text: 'No se pudo cargar el mensaje'
            }
            break;
    }

    

    return (
        <div className='toast-container' style={{'--toastBgColor': iconToRender.color}}>
            {iconToRender.icon}
            <p>{iconToRender.text}</p>
        </div>
    )
}

export default Toast