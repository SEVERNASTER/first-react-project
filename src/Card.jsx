
import './Card.css'
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Card({ model, brand, year, seats, transmission, category, color, price, available, imgUrl }) {
    return (
        <div className='cardContainer'>
            <div className="card-img-container">
                <img src={imgUrl} alt="car-image" />
            </div>
            <div className="car-info-container">
                <div className="card-text-container">
                    <h2>{brand} {model}</h2>
                    <p>Año: <span>{year}</span></p>
                    <p><span>{seats}</span> asientos</p>
                    <p>Transmisión: <span>{transmission}</span></p>
                    <p>Categoria: <span>{category}</span></p>
                    <p>Color: <span>{color}</span></p>
                </div>
                <div className="card-buttons-container">
                    <button className="card-button"><FaEye /></button>
                    <button className="card-button"><FaEdit /></button>
                    <button className="card-button"><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default Card