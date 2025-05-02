
import './Header.css'
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className='headerContainer'>
            <Link to='/cars/create' className='headerButton' >Agregar</Link>
            <button className='headerButton'>Agregar</button>
            <button className='headerButton'>Eliminar</button>
            <button className='headerButton'>Actualizar</button>
        </div>
    )
}

export default Header