import React, { useState, useEffect } from 'react';
import './UploadImage.css'
import UploadedImage from './UploadedImage';
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useToast } from '../context/ToastContext';

function UploadImage({ label, onImageUpload }) {
    const { showToast } = useToast()

    const [images, setImages] = useState([])
    const [remainingImages, setRemainingImages] = useState(5)
    const [fullImages, setFullImages] = useState(false)
    
    useEffect(() => {
        setFullImages(remainingImages === 0)
    }, [remainingImages])

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 5 || files.length > remainingImages) {
            showToast({ icon: 'error', text: 'No se pueden subir mas de 5 imagenes' })
        } else {
            const updatedUrls = files.map(file => URL.createObjectURL(file))

            const totalUrls = [...images, ...updatedUrls]
            setImages(totalUrls)
            const rest = remainingImages - updatedUrls.length
            const finalValue = rest < 0 ? remainingImages : rest
            setRemainingImages(finalValue)
            console.log('quedan ' + finalValue + ' imagenes');


            onImageUpload(totalUrls);
            // toast.success('Se agrego la imagen')
        }
    };

    const handleDeleteImage = (imageUrl) => {
        const updatedImages = images.filter(url => url != imageUrl)
        const leftImages = remainingImages + 1
        setRemainingImages(leftImages)
        setImages(updatedImages)
    }

    return (
        <div className="upload-image-container">
            <div className="header-upload-container">
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

                <div className={`${fullImages ? 'full' : ''} counter-upload`}>
                    <h2><span>{5 - remainingImages}</span> / 5</h2>
                </div>
            </div>

            <div className="images-preview">

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
