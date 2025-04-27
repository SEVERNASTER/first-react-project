import React from 'react'
import './TextArea.css'

function TextArea({ textAreaId, name, label, rows, cols, maxLength }) {
    return (
        <div className='textarea-group'>
            <textarea required name={name} id={textAreaId} maxLength={maxLength} rows={rows} cols={cols}></textarea>
            <label htmlFor={textAreaId}>{label}</label>
        </div>
    )
}

export default TextArea
