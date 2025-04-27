import React from 'react'
import './Input.css'

function Input({inputId, name, type, label, min, max}) {
    return (
        <div className='input-group'>
            <input required type={type} name={name} id={inputId}
            {...type === 'number' ? { min, max } : {} }
            />
            <label htmlFor={inputId}>{label}</label>
        </div>
    )
}

export default Input