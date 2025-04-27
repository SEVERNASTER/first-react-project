import React from 'react'

function Select({ name, selectId, options }) {
    return (
        <select name={name} id={selectId}>
            {
                Object.entries(options).map(([key, value], index) => {
                    return <option key={index} value={key}>{value}</option>
                })
            }
        </select>
    )
}

export default Select