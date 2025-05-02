import React from 'react'

function GradientTitle({ text, color1, color2, customStyles }) {
    return (
        <h2 style={
            {
                backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                ...customStyles
            }
        }>{text}</h2>
    )
}

export default GradientTitle