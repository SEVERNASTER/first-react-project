import React, { useState } from 'react';
import './UploadImage.css'

function UploadImage({ label, onImageUpload }) {
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length > 5) {

            setError('No se puede subir mas de 5 imágenes')

        }else{
            setError(null)
            const updatedUrls = files.map(file => URL.createObjectURL(file))
            setImages(updatedUrls)

            onImageUpload(updatedUrls);
        }
    };

    return (
        <div className="upload-image-container">
            <label>{label}</label>
            <input 
                multiple
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
            />
            {error && <p>{error}</p>}
            {images && images.map(url => {
                return <img key={url} src={url} alt="Car Preview" className="image-preview" />
            })}
        </div>
    );
}

export default UploadImage;
