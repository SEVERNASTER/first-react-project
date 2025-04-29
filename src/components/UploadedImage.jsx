import React from 'react'
import './UploadedImage.css'
import { FaRegCircleXmark } from "react-icons/fa6";

function UploadedImage({ imgUrl, handleDeleteImage }) {


    return (
        <div className='uploaded-image-container'>
            <img src={imgUrl} alt="foto del auto" />
            <div onClick={handleDeleteImage}
                className='x-preview-mark'>
                <FaRegCircleXmark />
            </div>
        </div>
    )
}

export default UploadedImage