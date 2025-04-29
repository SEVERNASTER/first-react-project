import React, { useState } from 'react';
import './UploadImage.css'
import UploadedImage from './UploadedImage';
import { FaCloudUploadAlt } from "react-icons/fa";

function UploadImage({ label, onImageUpload }) {
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 5) {
            setError('No se puede subir mas de 5 imágenes')
        } else {
            setError(null)
            const updatedUrls = files.map(file => URL.createObjectURL(file))
            setImages(updatedUrls)

            onImageUpload(updatedUrls);
        }
    };

    const handleDeleteImage = (imageUrl) => {
        const updatedImages = images.filter(url => url != imageUrl)
        setImages(updatedImages)
    }

    return (
        <div className="upload-image-container">
            <label>
                {label}&nbsp;<FaCloudUploadAlt />{/*esos simbolos raros son una entidad html
                                                    para espacio que significa non-braking space */}
                <input
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </label>

                <div className="images-preview">

                    {error && <p >{error}</p>}
                    {images && images.map(url => {
                        // en esta parte al momento de pasar el hanldeDeleteImage tenemos
                        //  que pasarlo como una funcion anonima, para que se ejecute cuando
                        // sea llamada, de lo contrario se ejecutara inmediatamente
                        return <UploadedImage key={url} imgUrl={url} handleDeleteImage={() => handleDeleteImage(url)} />
                    })}

                </div>

        </div>
    );
}

export default UploadImage;
