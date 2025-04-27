import React from 'react'

function GradientTitle({ text, color1, color2 }) {
    return (
        <h2 style={
            {
                backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            }
        }>{text}</h2>
    )
}

export default GradientTitle