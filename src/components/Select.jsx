import React from 'react'
import './Select.css'

function Select({ name, selectId, label, options }) {
    return (
        <div className="select-group">
            <label htmlFor={selectId} >{label}</label>
            <select name={name} id={selectId}>
                {
                    options.map(({ value, optionText, quickDescription }) => {
                        const description = quickDescription != undefined ? quickDescription : optionText
                        return <option
                            key={value}
                            value={value}
                            title={description}
                        >{optionText}</option>
                    })

                }
            </select>
        </div>
    )
}

export default Select