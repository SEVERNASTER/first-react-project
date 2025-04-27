import React, { useState } from 'react';
import './UploadImage.css'

function UploadImage({ label, onImageUpload }) {
    const [imagePreview, setImagePreview] = useState(null);

    // Función para manejar el cambio en el input file
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            // Generar una URL temporal para previsualizar la imagen
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);

            // Llamar a la función onImageUpload pasada como prop (si existe)
            onImageUpload(file);
        }
    };

    return (
        <div className="upload-image-container">
            <label>{label}</label>
            <input 
                type="file" 
                accept="image/*" // Limita a solo imágenes
                onChange={handleFileChange}
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        </div>
    );
}

export default UploadImage;
